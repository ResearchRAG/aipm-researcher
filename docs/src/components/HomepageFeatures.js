import React from 'react';
import clsx from 'clsx';
import { Link } from 'react-router-dom';
import styles from './HomepageFeatures.module.css';
const FeatureList = [
  {
    title: 'AIPM 研究员',
    Svg: require('../../static/img/gptr-logo.png').default,
    docLink: './docs/gpt-researcher/getting-started',
    description: (
      <>
        AIPM 研究员是一款自主智能体，专为各种任务的全面在线研究设计。
      </>
    ),
  },
  {
    title: '多智能体助手',
    Svg: require('../../static/img/multi-agent.png').default,
    docLink: './docs/gpt-researcher/langgraph',
    description: (
      <>
        了解一组 AI 智能体如何协同工作，从规划到发布对特定主题进行研究。
      </>
    ),
  },
  {
    title: '示例与演示',
    Svg: require('../../static/img/examples.png').default,
    docLink: './docs/examples/examples',
    description: (
      <>
        查看Tavily API在不同框架和用例中的实际应用。
      </>
    ),
  },
];
function Feature({Svg, title, description, docLink}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <img src={Svg} alt={title} height="60"/>
      </div>
      <div className="text--center padding-horiz--md">
        <Link to={docLink}>
            <h3>{title}</h3>
        </Link>
        <p>{description}</p>
      </div>
    </div>
  );
}
export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container" style={{marginTop: 30}}>
        <div className="row" style={{justifyContent: 'center'}}>
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}