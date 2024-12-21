import { useQuery } from '@tanstack/react-query';
import { FC } from 'react';
import { paths } from '../../../constant';
import challengeService from '../../../services/challengeService';
import { ChallengeOverviewSkeleton } from '../../skeleton';
import ChallengeLevelDifficulty from '../ChallengeLevelDifficulty';
import ChallengeTechnical from '../ChallengeTechnical';
import TagChallenge from '../TagChallenge';
import './challengeOverview.scss';
import { ButtonConditionChallengeOverview, ConditionMessage } from './Partials';
import ImagePreview from './Partials/ImagePreview/ImagePreview';
import { useTranslation } from 'react-i18next';

interface IChallengeOverviewProps {
  challengeId: string;
  handleDataTransmissionParent?: (
    submitValue: boolean,
    joinValue: boolean,
    enoughPointValue: boolean,
    solutionSubmitId: string | null,
  ) => void;
}

const ChallengeOverview: FC<IChallengeOverviewProps> = ({
  challengeId,
  handleDataTransmissionParent,
}) => {
  const { t } = useTranslation();
  const {
    data: challengeOverviewData,
    isFetched,
    isFetching,
    refetch,
  } = useQuery({
    queryKey: [challengeId, paths.QUERY_KEY.challengeDetails],
    queryFn: async () => {
      const response = await challengeService.getDetails({ challengeId });
      const { isSubmit, isJoin, enoughPoint } = response.data;
      if (handleDataTransmissionParent) {
        handleDataTransmissionParent(
          isSubmit,
          isJoin,
          enoughPoint,
          challengeOverviewData?.solutionSubmitId || null,
        );
      }
      return response.data;
    },
  });

  if (isFetching && isFetched === false) {
    return <ChallengeOverviewSkeleton />;
  }

  if (!challengeOverviewData) {
    return;
  }

  if (isFetching && handleDataTransmissionParent) {
    handleDataTransmissionParent(
      challengeOverviewData.isSubmit,
      challengeOverviewData.isJoin,
      challengeOverviewData.enoughPoint,
      challengeOverviewData.solutionSubmitId || null,
    );
  }

  // refetch()
  const handleEventClickButton: () => void = () => {
    refetch().then((response) => {
      if (handleDataTransmissionParent && response.data) {
        handleDataTransmissionParent(
          response.data?.isSubmit,
          response.data?.isJoin,
          response.data?.enoughPoint,
          challengeOverviewData.solutionSubmitId || null,
        );
      }
    });
  };

  return (
    <div className="challenge__overview-component">
      <div className="challenge__about">
        <div className="heading">
          <div className="challenge__tag-list">
            {challengeOverviewData.premium && <TagChallenge type="premium" />}
            {!challengeOverviewData.premium && <TagChallenge type="free" />}
            <TagChallenge type="new" />
          </div>
          <div className="challenge__technical-properties">
            <div className="challenge__technical-list">
              {challengeOverviewData?.technical?.map((technical, index) => (
                <ChallengeTechnical
                  key={`${technical}-${index}`}
                  technicalValue={technical}
                />
              ))}
            </div>
            <div className="challenge__properties">
              <ChallengeLevelDifficulty
                level={challengeOverviewData.level}
                difficulty={challengeOverviewData.requiredPoint}
              />
            </div>
          </div>
        </div>

        <div className="content">
          <div className="challenge__name">{challengeOverviewData.title}</div>
          <div className="challenge__description">
            {challengeOverviewData.shortDes}
          </div>
          <div className="challenge__statistic">
            <div className="score">
              <div className="label">{t('ScoreText')}</div>
              <div className="value">{challengeOverviewData.point}</div>
            </div>
            {isFetching ? (
              <>
                <div className="statistic__skeleton"></div>
                <div className="statistic__skeleton"></div>
              </>
            ) : (
              <>
                <div className="people__participated">
                  <div className="label">{t('PeopleParticipated')}</div>
                  <div className="value">{challengeOverviewData.joinTotal}</div>
                </div>
                <div className="people__submit">
                  <div className="label">{t('PeopleSubmit')}</div>
                  <div className="value">
                    {challengeOverviewData.submittedTotal}
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
        {/*  */}
        <ConditionMessage
          enoughPoint={challengeOverviewData.enoughPoint}
          challengePremium={challengeOverviewData.premium}
        />
        <div className="action">
          {isFetching ? (
            <div className="button-skeleton"></div>
          ) : (
            <ButtonConditionChallengeOverview
              challengePremium={challengeOverviewData.premium}
              eventClick={handleEventClickButton}
              isJoin={challengeOverviewData.isJoin}
              isSubmit={challengeOverviewData.isSubmit}
              enoughPoint={challengeOverviewData.enoughPoint}
              solutionSubmitId={challengeOverviewData.solutionSubmitId}
              id={challengeId}
            />
          )}
        </div>
      </div>
      <div className="challenge__preview">
        <ImagePreview imageURL={challengeOverviewData.image} />
      </div>
    </div>
  );
};

export default ChallengeOverview;
