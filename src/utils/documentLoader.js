// This utility will be used server-side to load and process documentation files
// Since Docusaurus builds static sites, we'll need to pre-process the content

/**
 * Utility to load and process documentation files for RAG system
 */

// This would typically be used in a Node.js environment during build time
// For demonstration, we'll create mock data based on your existing documentation

const fs = require('fs').promises;
const path = require('path');

// Mock function to simulate loading documents from your docs directory
async function loadDocuments() {
  // In a real implementation, you would read and parse your markdown files
  // For now, we'll return mock content based on your book structure

  const documents = [
    {
      id: 'intro',
      title: 'Introduction to Physical AI & Humanoid Robots',
      content: `This book explores the four core modules of Physical AI for humanoid robots:

        Module 1: ROS 2 (Robotic Nervous System)
        - Middleware for robot control
        - ROS 2 nodes, topics, services
        - Bridging Python agents with rclpy
        - URDF for humanoid modeling

        Module 2: Digital Twin (Gazebo & Unity)
        - Physics simulation: gravity, collisions
        - Sensor simulation: LiDAR, Depth, IMU
        - Unity high-fidelity rendering and HRI scenes

        Module 3: NVIDIA Isaac (AI-Robot Brain)
        - Isaac Sim photorealistic simulation
        - Synthetic data generation
        - Isaac ROS: VSLAM, navigation
        - Nav2 for bipedal humanoid path planning

        Module 4: VLA (Vision-Language-Action)
        - Whisper voice-to-action
        - LLM cognitive planning: language → ROS 2 actions
        - Vision → Language → Action reasoning loop`,
      source: 'docs/intro.md'
    },
    {
      id: 'module-1-ros2',
      title: 'Module 1: ROS 2 (Robotic Nervous System)',
      content: `ROS 2 (Robot Operating System 2) serves as the foundational middleware for robot control systems. Key concepts include:

        Nodes: Independent processes that perform computation
        Topics: Named buses over which nodes exchange messages
        Services: Synchronous request/response communication pattern
        Actions: Asynchronous request/response with feedback and goals

        ROS 2 provides:
        - Real-time performance capabilities
        - Improved security model
        - Better multi-robot support
        - Quality of Service (QoS) policies for reliable communication

        For humanoid robots, ROS 2 enables coordination between different subsystems:
        - Motor controllers
        - Sensor processing units
        - AI decision-making modules
        - Navigation systems`,
      source: 'docs/physical-ai-modules/module-1-ros2.md'
    },
    {
      id: 'module-2-digital-twin',
      title: 'Module 2: Digital Twin (Gazebo & Unity)',
      content: `Digital twin technology creates virtual replicas of physical humanoid robots for simulation and testing:

        Physics Simulation:
        - Accurate modeling of gravity, collisions, and forces
        - Realistic material properties and interactions
        - Environmental factors like friction and drag

        Sensor Simulation:
        - LiDAR: Simulates laser range finder data
        - Depth sensors: Creates 3D point clouds
        - IMU: Inertial measurement unit simulation
        - Cameras: RGB and stereo vision simulation

        Platforms:
        - Gazebo: Open-source physics engine with ROS integration
        - Unity: High-fidelity graphics for human-robot interaction studies
        - Custom simulators for specific robot morphologies

        Benefits:
        - Safe testing environment without hardware risk
        - Accelerated development cycles
        - Cost-effective experimentation`,
      source: 'docs/physical-ai-modules/module-2-digital-twin.md'
    },
    {
      id: 'module-3-nvidia-isaac',
      title: 'Module 3: NVIDIA Isaac (AI-Robot Brain)',
      content: `NVIDIA Isaac platform provides AI capabilities for robotic systems:

        Isaac Sim:
        - Photorealistic simulation environment
        - Synthetic data generation for training
        - Domain randomization techniques
        - Integration with Omniverse platform

        Isaac ROS:
        - Hardware-accelerated perception pipelines
        - Visual Simultaneous Localization and Mapping (VSLAM)
        - Computer vision acceleration
        - Deep learning inference optimization

        Navigation:
        - Nav2 stack for autonomous navigation
        - Path planning for bipedal locomotion
        - Obstacle avoidance algorithms
        - Multi-floor navigation support

        Key Features:
        - GPU acceleration for real-time performance
        - Transfer learning from simulation to reality
        - Modular architecture for customization`,
      source: 'docs/physical-ai-modules/module-3-nvidia-isaac.md'
    },
    {
      id: 'module-4-vla',
      title: 'Module 4: VLA (Vision-Language-Action)',
      content: `Vision-Language-Action systems enable natural interaction with humanoid robots:

        VLA Architecture:
        - Vision processing: Image and video understanding
        - Language processing: Natural language comprehension
        - Action execution: Translation to robot commands

        Voice Interface:
        - Whisper for speech recognition
        - Text-to-speech for robot responses
        - Voice command interpretation
        - Multi-language support possibilities

        Cognitive Planning:
        - LLM-based reasoning for complex tasks
        - Language → ROS 2 action mapping
        - Hierarchical task decomposition
        - Context-aware decision making

        Reasoning Loop:
        1. Perception: Sense environment through cameras/sensors
        2. Understanding: Interpret visual and linguistic inputs
        3. Planning: Determine appropriate actions
        4. Execution: Execute robot movements and behaviors
        5. Feedback: Monitor and adjust based on results`,
      source: 'docs/physical-ai-modules/module-4-vla.md'
    },
    {
      id: 'capstone',
      title: 'Capstone: Autonomous Humanoid Project',
      content: `The capstone project integrates all four modules:

        System Integration:
        - Connecting ROS 2 nodes across all modules
        - Managing communication between subsystems
        - Coordinating timing and synchronization

        Practical Applications:
        - Home assistance robots
        - Industrial automation
        - Healthcare support systems
        - Educational robotics platforms

        Challenges Addressed:
        - Real-world perception limitations
        - Robust control in uncertain environments
        - Human-robot interaction safety
        - Scalable deployment strategies

        Evaluation Metrics:
        - Task completion success rate
        - Response time to user commands
        - Energy efficiency
        - Safety compliance`,
      source: 'docs/physical-ai-modules/capstone-autonomous-humanoid.md'
    }
  ];

  return documents;
}

// Function to split documents into chunks for embedding
function chunkDocuments(documents, chunkSize = 1000, overlap = 200) {
  const chunks = [];

  documents.forEach(doc => {
    const content = doc.content;
    let start = 0;

    while (start < content.length) {
      let end = start + chunkSize;

      // Try to break at sentence boundary
      if (end < content.length) {
        const remaining = content.slice(end);
        const nextPeriod = remaining.indexOf('. ');
        const nextNewline = remaining.indexOf('\n');

        if (nextPeriod > 0 && nextPeriod < 100) {
          end += nextPeriod + 2;
        } else if (nextNewline > 0 && nextNewline < 100) {
          end += nextNewline + 1;
        }
      }

      const chunk = content.slice(start, end).trim();
      if (chunk) {
        chunks.push({
          id: `${doc.id}-${chunks.length}`,
          content: chunk,
          metadata: {
            title: doc.title,
            source: doc.source,
            docId: doc.id
          }
        });
      }

      start = end - overlap;
    }
  });

  return chunks;
}

module.exports = {
  loadDocuments,
  chunkDocuments
};