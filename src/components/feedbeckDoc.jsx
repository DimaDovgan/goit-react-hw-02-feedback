import React, { Component } from "react";
import { StatisyicList } from "./statistic-list"
import { ButtonList } from "./buttoon-list";
import { Notification } from "./Notification"
import { Section } from "./sectionTitle"
import PropTypes from "prop-types";
export class Feedback extends Component { 
    
    state = {
    good: 0,
    neutral: 0,
    bad: 0,
    }
    handl = (event) => {
        
        let name = event.target.name;
        this.setState((state, props) => (state[name]+=1));

    };

    countTotalFeedback = () => {
        
        return Object.values(this.state).reduce((sum, current) => {
            return sum + current
        }, 0)
    }
    countPositiveFeedbackPercentage = () => {
        return ((this.state.good/this.countTotalFeedback())*100)
    }

    render() {
        return <div>
            <Section title="Please leave feedback">
            <ButtonList options={this.props} onLeaveFeedback={this.handl} />
            </Section>
            <Section title="Statistic">
            {Object.values(this.state).some((value) => value !== 0) ?
                <StatisyicList good={this.state.good} neutral={this.state.neutral} bad={this.state.bad} total={this.countTotalFeedback()} positivePercentage={this.countPositiveFeedbackPercentage()} />
                : <Notification message="There is no feedback" />}
            </Section>
        </div>
        
    }
}
Feedback.propTypes = {
    state: PropTypes.arrayOf(PropTypes.object)
}