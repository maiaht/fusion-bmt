import { Step, Stepper } from '@equinor/fusion-components'
import React from 'react'
import { Evaluation, Progression } from '../../api/models'
import { calcProgressionStatus } from '../../utils/ProgressionStatus'
import NominationView from './Nomination/NominationView'
import PreparationView from './Preparation/PreparationView'
import AlignmentView from './Alignment/AlignmentView'
import WorkshopView from './Workshop/WorkshopView'

interface EvaluationViewProps {
    evaluation: Evaluation
    onProgressEvaluationClick: () => void
    onProgressParticipant: (newProgressions: Progression) => void
}

const EvaluationView = ({evaluation, onProgressEvaluationClick, onProgressParticipant}: EvaluationViewProps) => {
    return <>
        <Stepper
            forceOrder={false}
            activeStepKey={evaluation.progression}
            hideNavButtons={true}
        >
            <Step
                title="Nomination"
                description={calcProgressionStatus(evaluation.progression, Progression.Nomination)}
                stepKey={Progression.Nomination}
            >
                <NominationView
                    evaluation={evaluation}
                    onNextStep={() => onProgressEvaluationClick()}
                />
            </Step>
            <Step
                title="Preparation"
                description={calcProgressionStatus(evaluation.progression, Progression.Preparation)}
                stepKey={Progression.Preparation}
            >
                <>
                    <PreparationView
                        evaluation={evaluation}
                        onNextStepClick={() => onProgressEvaluationClick()}
                        onProgressParticipant={onProgressParticipant}
                    />
                </>
            </Step>
            <Step
                title="Alignment"
                description={calcProgressionStatus(evaluation.progression, Progression.Alignment)}
                stepKey={Progression.Alignment}
            >
                <AlignmentView
                    evaluation={evaluation}
                    onNextStepClick={() => onProgressEvaluationClick()}
                    onProgressParticipant={onProgressParticipant}
                />
            </Step>
            <Step
                title="Workshop"
                description={calcProgressionStatus(evaluation.progression, Progression.Workshop)}
                stepKey={Progression.Workshop}
            >
                <WorkshopView
                    evaluation={evaluation}
                    onNextStepClick={() => onProgressEvaluationClick()}
                    onProgressParticipant={onProgressParticipant}
                />
            </Step>
            <Step
                title="Follow-up"
                description={calcProgressionStatus(evaluation.progression, Progression.FollowUp)}
                stepKey={Progression.FollowUp}
            >
                <h1>Follow-up</h1>
            </Step>
        </Stepper>
    </>
}

export default EvaluationView