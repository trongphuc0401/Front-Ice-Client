import { FC, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { ChallengeOverview, FAQ, Section } from '../../components/common';
import { paths } from '../../constant';
import './challengeDetails.scss';
import {
  ChallengeDetailsDownload,
  ChallengeDetailsInformation,
  ChallengeDetailsSolution,
} from './Partials';
import { ConditionWrapper } from '../../components/wrapper';
import { useTranslation } from 'react-i18next';

const ChallengeDetailsPage: FC = () => {
  const { t } = useTranslation();
  const [tabActive, setTabActive] = useState<number>(1);
  const { challengeId } = useParams();
  const [isJoin, setIsJoin] = useState<boolean | null>(null);
  const [enoughPoint, setEnoughPoint] = useState<boolean | null>(null);
  const [isSubmit, setIsSubmit] = useState<boolean | null>(null);
  const [solutionId, setSolutionId] = useState<string | null>(null);
  const navigate = useNavigate();
  const changeTabActive = (tabId: number, disable: boolean) => {
    if (!disable) {
      setTabActive(tabId);
    }
  };

  if (!challengeId) {
    navigate(`${paths.home}`);
    return;
  }

  const handleChildrenData: (
    submitValue: boolean,
    joinValue: boolean,
    enoughPointValue: boolean,
    solutionSubmitId: string | null,
  ) => void = (submitValue, joinValue, enoughPointValue, solutionSubmitId) => {
    setEnoughPoint(enoughPointValue);
    setIsSubmit(submitValue);
    setIsJoin(joinValue);
    setSolutionId(solutionSubmitId);
  };

  return (
    <div className="challenge__details-page">
      <div className="title">{t('ChallengeDetailsPage')}</div>
      <div className="content">
        <ChallengeOverview
          challengeId={challengeId}
          handleDataTransmissionParent={handleChildrenData}
        />

        <section className="tab__content-wrapper">
          <ul className="tab__list">
            <li
              onClick={() => changeTabActive(1, false)}
              className={`item ${tabActive === 1 && 'active'} `}
            >
              {t('Information')}
            </li>

            <ConditionWrapper
              condition={
                !(isJoin === null && isSubmit === null && enoughPoint === null)
              }
              fallback={() => {
                return (
                  <>
                    <div className="tab__skeleton"></div>
                    <div className="tab__skeleton"></div>
                  </>
                );
              }}
            >
              <>
                <li
                  onClick={() => changeTabActive(2, isJoin === false)}
                  className={`item ${tabActive === 2 && 'active'} ${isJoin === false && 'disabled'} `}
                >
                  {t('DownloadFilesChallenges')}
                </li>
              </>
            </ConditionWrapper>
          </ul>

          <div className="content__of-tab">
            {tabActive === 1 && <ChallengeDetailsInformation />}
            {tabActive === 2 && <ChallengeDetailsDownload />}
            {tabActive === 3 && solutionId && challengeId && (
              <ChallengeDetailsSolution
                challengeId={challengeId}
                solutionId={solutionId}
              />
            )}
          </div>
        </section>

        <Section
          title="Challenge FAQS"
          titlePosition="center"
          className="faq__challenge-section"
        >
          <div className="list">
            <FAQ
              title="How do i submit my solution ?"
              description="We recommend reading our complete guide to submitting solutions . If you get stuck and need help, please feel free to ask questions in our Discord server, and we will help you submit your project."
            />
            <FAQ
              title="How do i submit my solution ?"
              description="We recommend reading our complete guide to submitting solutions . If you get stuck and need help, please feel free to ask questions in our Discord server, and we will help you submit your project."
            />
            <FAQ
              title="How do i submit my solution ?"
              description="We recommend reading our complete guide to submitting solutions . If you get stuck and need help, please feel free to ask questions in our Discord server, and we will help you submit your project."
            />
            <FAQ
              title="How do i submit my solution ?"
              description="We recommend reading our complete guide to submitting solutions . If you get stuck and need help, please feel free to ask questions in our Discord server, and we will help you submit your project."
            />
          </div>
        </Section>
      </div>
    </div>
  );
};

export default ChallengeDetailsPage;
