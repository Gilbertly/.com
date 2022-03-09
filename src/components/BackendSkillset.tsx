// import * as React from 'react';
// import { Skill, SkillProps } from './Skill';

// export const BackendSkillset = ({ backendIcons, awsIcons }: any) => {
//   const backendSkills: SkillProps[] = [];
//   const awsSkills: SkillProps[] = [];

//   backendIcons.map((backendIcon: any) => {
//     const iconURL = backendIcon.node.childImageSharp.fluid.src;

//     if (iconURL.includes('be-svc-nodejs')) {
//       backendSkills.push({
//         name: 'Nodejs',
//         url: iconURL,
//         alt: 'Nodejs Icon',
//       });
//     }
//     if (iconURL.includes('be-svc-typescript')) {
//       backendSkills.push({
//         name: 'Typescript',
//         url: iconURL,
//         alt: 'Typescript Icon',
//       });
//     }
//     if (iconURL.includes('be-svc-sentry')) {
//       backendSkills.push({
//         name: 'Sentry',
//         url: iconURL,
//         alt: 'Sentry Icon',
//       });
//     }
//     if (iconURL.includes('be-svc-algolia')) {
//       backendSkills.push({
//         name: 'Algolia',
//         url: iconURL,
//         alt: 'Algolia Icon',
//       });
//     }
//     if (iconURL.includes('be-svc-jest')) {
//       backendSkills.push({
//         name: 'Jest',
//         url: iconURL,
//         alt: 'Jest Icon',
//       });
//     }
//     if (iconURL.includes('be-svc-stripe')) {
//       backendSkills.push({
//         name: 'Stripe',
//         url: iconURL,
//         alt: 'Stripe Icon',
//       });
//     }
//     if (iconURL.includes('be-svc-serverless')) {
//       backendSkills.push({
//         name: 'Serverless Framework',
//         url: iconURL,
//         alt: 'Serverless Framework Icon',
//       });
//     }
//     if (iconURL.includes('be-svc-circleci')) {
//       backendSkills.push({
//         name: 'CircleCI',
//         url: iconURL,
//         alt: 'CircleCI Icon',
//       });
//     }
//     if (iconURL.includes('be-svc-puppeteer')) {
//       backendSkills.push({
//         name: 'Puppeteer',
//         url: iconURL,
//         alt: 'Puppeteer Icon',
//       });
//     }
//     if (iconURL.includes('be-svc-cypress')) {
//       backendSkills.push({
//         name: 'Cypress',
//         url: iconURL,
//         alt: 'Cypress Icon',
//       });
//     }
//     if (iconURL.includes('be-svc-docker')) {
//       backendSkills.push({
//         name: 'Docker',
//         url: iconURL,
//         alt: 'Docker Icon',
//       });
//     }
//   });

//   awsIcons.map((awsIcon: any) => {
//     const iconURL = awsIcon.node.childImageSharp.fluid.src;

//     if (iconURL.includes('be-aws-route53')) {
//       awsSkills.push({
//         name: 'AWS Route53',
//         url: iconURL,
//         alt: 'AWS Route53 Icon',
//       });
//     }
//     if (iconURL.includes('be-aws-cloudfront')) {
//       awsSkills.push({
//         name: 'AWS CloudFront',
//         url: iconURL,
//         alt: 'AWS CloudFront Icon',
//       });
//     }
//     if (iconURL.includes('be-aws-cognito')) {
//       awsSkills.push({
//         name: 'AWS Cognito',
//         url: iconURL,
//         alt: 'AWS Cognito Icon',
//       });
//     }
//     if (iconURL.includes('be-aws-appsync')) {
//       awsSkills.push({
//         name: 'AWS AppSync',
//         url: iconURL,
//         alt: 'AWS AppSync Icon',
//       });
//     }
//     if (iconURL.includes('be-aws-apigw')) {
//       awsSkills.push({
//         name: 'AWS API Gateway',
//         url: iconURL,
//         alt: 'AWS API Gateway Icon',
//       });
//     }
//     if (iconURL.includes('be-aws-lambda')) {
//       awsSkills.push({
//         name: 'AWS Lambda',
//         url: iconURL,
//         alt: 'AWS Lambda Icon',
//       });
//     }
//     if (iconURL.includes('be-aws-fargate')) {
//       awsSkills.push({
//         name: 'AWS Fargate',
//         url: iconURL,
//         alt: 'AWS Fargate Icon',
//       });
//     }
//     if (iconURL.includes('be-aws-kinesis')) {
//       awsSkills.push({
//         name: 'AWS Kinesis',
//         url: iconURL,
//         alt: 'AWS Kinesis Icon',
//       });
//     }
//     if (iconURL.includes('be-aws-waf')) {
//       awsSkills.push({
//         name: 'AWS WAF',
//         url: iconURL,
//         alt: 'AWS WAF Icon',
//       });
//     }
//     if (iconURL.includes('be-aws-aurora')) {
//       awsSkills.push({
//         name: 'AWS Aurora',
//         url: iconURL,
//         alt: 'AWS Aurora Icon',
//       });
//     }
//     if (iconURL.includes('be-aws-dynamodb')) {
//       awsSkills.push({
//         name: 'AWS DynamoDB',
//         url: iconURL,
//         alt: 'AWS DynamoDB Icon',
//       });
//     }
//     if (iconURL.includes('be-aws-sqs')) {
//       awsSkills.push({
//         name: 'AWS SQS',
//         url: iconURL,
//         alt: 'AWS SQS Icon',
//       });
//     }
//     if (iconURL.includes('be-aws-elasticsearch')) {
//       awsSkills.push({
//         name: 'AWS ElasticSearch',
//         url: iconURL,
//         alt: 'AWS ElasticSearch Icon',
//       });
//     }
//     if (iconURL.includes('be-aws-s3')) {
//       awsSkills.push({
//         name: 'AWS S3',
//         url: iconURL,
//         alt: 'AWS S3 Icon',
//       });
//     }
//     if (iconURL.includes('be-aws-cloudwatch')) {
//       awsSkills.push({
//         name: 'AWS CloudWatch',
//         url: iconURL,
//         alt: 'AWS CloudWatch Icon',
//       });
//     }
//     if (iconURL.includes('be-aws-xray')) {
//       awsSkills.push({
//         name: 'AWS Xray',
//         url: iconURL,
//         alt: 'AWS Xray Icon',
//       });
//     }
//   });

//   const backendSkillset = backendSkills.map(skill => (
//     <Skill name={skill.name} url={skill.url} alt={skill.alt} key={skill.url} />
//   ));

//   const awsSkillset = awsSkills.map(skill => (
//     <Skill name={skill.name} url={skill.url} alt={skill.alt} key={skill.url} />
//   ));

//   return (
//     <section className="section-backend">
//       <h2 className="title">Backend Skillset</h2>
//       <div className="skillset">
//         <div className="svc">{backendSkillset}</div>
//         <hr />
//         <div className="aws">{awsSkillset}</div>
//       </div>
//     </section>
//   );
// };
