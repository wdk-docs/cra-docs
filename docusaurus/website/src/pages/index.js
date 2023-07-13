/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React from 'react';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';

import Layout from '@theme/Layout';
import CodeBlock from '@theme/CodeBlock';

import clsx from 'clsx';

import styles from './styles.module.css';

const features = [
  {
    title: '很少的学习',
    content:
      "您不需要学习和配置许多构建工具。即时重新加载帮助你专注于开发。部署时，您的包将自动优化。",
  },
  {
    title: '只有一个依赖项',
    content:
      '你的应用只需要一个构建依赖。我们对Create React App进行了测试，以确保它所有的底层组件都能无缝地协同工作——没有复杂的版本不匹配。',
  },
  {
    title: '没有锁定',
    content:
      '在底层，我们使用webpack、Babel、ESLint和其他神奇的项目来为你的应用提供动力。如果你想要高级配置，你可以从Create React app中“弹出”并直接编辑它们的配置文件。',
  },
];

function Home() {
  const context = useDocusaurusContext();
  const { siteConfig = {} } = context;

  return (
    <Layout
      permalink={'/'}
      description={'通过运行一个命令设置一个现代的web应用程序。'}
    >
      <div className={clsx('hero hero--dark', styles.heroBanner)}>
        <div className="container">
          <img
            className={clsx(styles.heroBannerLogo, 'margin-vert--md')}
            alt="Create React App logo"
            src={useBaseUrl('img/logo.svg')}
          />
          <h1 className="hero__title">{siteConfig.title}</h1>
          <p className="hero__subtitle">{siteConfig.tagline}</p>
          <div className={styles.getStarted}>
            <Link
              className="button button--outline button--primary button--lg"
              to={useBaseUrl('docs/getting-started')}
            >
              开 始
            </Link>
          </div>
        </div>
      </div>
      {features && features.length && (
        <div className={styles.features}>
          <div className="container">
            <div className="row">
              {features.map(({ title, content }, idx) => (
                <div key={idx} className={clsx('col col--4', styles.feature)}>
                  <h2>{title}</h2>
                  <p>{content}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
      <div className={styles.gettingStartedSection}>
        <div className="container padding-vert--xl text--left">
          <div className="row">
            <div className="col col--4 col--offset-1">
              <h2>在几秒钟内开始</h2>
              <p>
              无论你是使用React还是其他库，Create React App都可以让你<strong>专注于代码，而不是构建工具</strong>。
                <br />
                <br />
                要创建一个名为<i>my-app</i>的项目，运行命令:
              </p>
              <CodeBlock className="language-sh">
                npx create-react-app my-app
              </CodeBlock>
              <br />
            </div>
            <div className="col col--5 col--offset-1">
              <img
                className={styles.featureImage}
                alt="Easy to get started in seconds"
                src={
                  'https://camo.githubusercontent.com/29765c4a32f03bd01d44edef1cd674225e3c906b/68747470733a2f2f63646e2e7261776769742e636f6d2f66616365626f6f6b2f6372656174652d72656163742d6170702f323762343261632f73637265656e636173742e737667'
                }
              />
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className="container padding-vert--xl text--left">
          <div className="row">
            <div className="col col--4 col--offset-1">
              <img
                className={styles.featureImage}
                alt="Easy to update"
                src={useBaseUrl('img/update.png')}
              />
            </div>
            <div className="col col--5 col--offset-1">
              <h2>Easy to Maintain</h2>
              <p>
              更新构建工具通常是一项艰巨而耗时的任务。当新版本的Create React App发布时，你可以使用一个命令进行升级:
              </p>
              <CodeBlock className="language-sh">
                npm install react-scripts@latest
              </CodeBlock>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default Home;
