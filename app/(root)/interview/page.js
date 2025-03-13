import { getAssessments } from '@/actions/interview';
import React from 'react';
import StatsCard from './_components/stats-card';
import PerformanceChart from './_components/performance-chart';
import QuizList from './_components/quiz-list';

const InterviewPrepPage = async () => {
    const assessments = await getAssessments();

    return (
        <div>
            <div className="flex items-center justify-between mb-5">
                <h1 className="text-6xl font-bold gradient-title">
                    Interview Preparation
                </h1>
            </div>
            <div className="space-y-6">
                <StatsCard assessments={assessments} />
                <PerformanceChart assessments={assessments} />
                <QuizList assessments={assessments} />
            </div>
        </div>
    );
};

export default InterviewPrepPage;