import { FC } from 'react';
import Button from '../Button';
import './task.scss';
// import TagChallenge from '../TagChallenge';
import { ITaskEntity } from '../../../types/entity/task';
import ChallengeLevelDifficulty from '../ChallengeLevelDifficulty';
import ChallengeTechnical from '../ChallengeTechnical';
import TagChallenge from '../TagChallenge';
import { CompanyInformation } from './Partials';
import { ExpiredTime } from './Partials/ExpiredTime';
import { paths } from '../../../constant';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

interface IChallengeProps {
  taskData: Omit<
    ITaskEntity,
    'isJoin' | 'isSubmit' | 'solutionSubmitId' | 'submittedTotal' | 'joinTotal'
  >;
}

const Task: FC<IChallengeProps> = ({ taskData }) => {
  const navigate = useNavigate();
  const { t } = useTranslation();

  const handleClickViewDetails = () => {
    navigate(`${paths.taskDetails}/${taskData.id}`);
  };

  return (
    <div className="task__component-container">
      <CompanyInformation data={taskData.owner} />
      <div className="banner">
        <img src={taskData.image} alt="" />
        <div className="tag__challenge-list">
          <TagChallenge type={'task'} />
          <TagChallenge type={'new'} />
        </div>
      </div>

      <div className="content">
        <div className="heading">
          <div className="heading-name">{taskData.title}</div>
          <div className="heading-technical">
            {taskData.technical.map((technical, index) => (
              <ChallengeTechnical
                technicalValue={technical}
                key={`${technical}-${index}`}
              />
            ))}
          </div>
        </div>

        <div className="overview">
          <ChallengeLevelDifficulty
            level={'taskee'}
            difficulty={taskData.requiredPoint}
          />
        </div>

        <div className="description">
          <span>{taskData.shortDes}</span>
        </div>
      </div>
      <ExpiredTime expiredTime={taskData.expiredAt} />
      <Button
        onClick={handleClickViewDetails}
        label={t('ViewDetails.Text')}
        buttonSize="small"
        styleType="secondary"
      />
    </div>
  );
};

export default Task;
