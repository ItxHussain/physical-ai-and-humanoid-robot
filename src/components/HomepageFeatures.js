import React from 'react';
import clsx from 'clsx';
import styles from './HomepageFeatures.module.css';

const FeatureList = [
  {
    title: 'ROS 2 (Robotic Nervous System)',
    description: (
      <>
        Middleware for robot control with ROS 2 nodes, topics, services, and bridging Python agents with rclpy for humanoid robotics.
      </>
    ),
  },
  {
    title: 'Digital Twin (Gazebo & Unity)',
    description: (
      <>
        Physics simulation with gravity and collisions, sensor simulation (LiDAR, Depth, IMU), and high-fidelity rendering in Unity for HRI scenes.
      </>
    ),
  },
  {
    title: 'NVIDIA Isaac (AI-Robot Brain)',
    description: (
      <>
        AI-powered robot intelligence with Isaac Sim photorealistic simulation, synthetic data generation, and advanced navigation systems.
      </>
    ),
  },
  {
    title: 'Vision-Language-Action (VLA)',
    description: (
      <>
        Cognitive planning with language-to-ROS 2 action reasoning loops, enabling humanoid robots to understand and execute complex tasks.
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--3')}>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}