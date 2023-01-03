# Awesome Touch [![Awesome](https://awesome.re/badge-flat.svg)](https://awesome.re)

Owing to my personal interest, this collection may focus more on vision-based tactile sensors and learning-based applications.
Keep updating! ! !

## Table of Contents

- [Sensors](#sensors)
  - [Vision-Based](#vision-based)
  - [Visual-Tactile (Multimodals)](#visual-tactile)
  - [Non-Vision-Based](#non-vision-based)
- [Applications](#applications)
  - [Manipulation/Grasping](#manipulationgrasping)
  - [Classification/Recognition](#classificationrecognition)
  - [Mapping/Localization](#mappinglocalization)
  - [Extrinsic Contact Sensing](#extrinsic-contact-sensing)
  - [Others](#others)
- [Software](#software)
  - [Simulator](#simulator)
  - [Library](#library)
  - [Dataset](#dataset)
- [Review](#review)
- [Thesis](#thesis)
- [Products](#products)
- [Open Source](#open-source)



## Sensors

### Vision-Based
- [Planar and finger-shaped optical tactile sensors for robotic applications](https://ieeexplore.ieee.org/abstract/document/20431), Begej et al., IEEE Journal on Robotics and Automation 1988

- [Vision-based sensor for real-time measuring of surface traction fields](https://ieeexplore.ieee.org/abstract/document/1381228), Kamiyama et al., CG&A 2005

- [Measurement of force vector field of robotic finger using vision-based haptic sensor](https://ieeexplore.ieee.org/abstract/document/4650712), Sato et al., IROS 2008

- [Retrographic sensing for the measurement of surface texture and shape](https://ieeexplore.ieee.org/abstract/document/5206534), Johnson et al., CVPR 2009

- [Finger-Shaped GelForce: Sensor for Measuring Surface Traction Fields for Robotic Hand](https://ieeexplore.ieee.org/abstract/document/5306070), Sato et al., TOH 2010

- [Microgeometry Capture using an Elastomeric Sensor](https://dl.acm.org/doi/abs/10.1145/2010324.1964941), Johnson et al., TOG 2011

- [Localization and Manipulation of Small Parts Using GelSight Tactile Sensing](https://ieeexplore.ieee.org/abstract/document/6943123), Li et al., IROS 2014

- [Measurement of Shear and Slip with a GelSight Tactile Sensor](https://ieeexplore.ieee.org/abstract/document/7139016), Yuan et al., ICRA 2015

- [Improved GelSight Tactile Sensor for Measuring Geometry and Slip](https://ieeexplore.ieee.org/abstract/document/8202149), Dong et al., IROS 2017

- [GelSight: High-Resolution Robot Tactile Sensors for Estimating Geometry and Force](https://www.mdpi.com/1424-8220/17/12/2762), Yuan et al., MDPI Sensors 2017

- [FingerVision Tactile Sensor Design and Slip Detection Using Convolutional LSTM Network](https://arxiv.org/abs/1810.02653), Zhang et al., arxiv 2018

- [The TacTip Family: Soft Optical Tactile Sensors with 3D-Printed Biomimetic Morphologies](https://www.liebertpub.com/doi/full/10.1089/soro.2017.0052), Ward-Cherrier et al., SoRo 2018

- [GelSlim: A High-Resolution, Compact, Robust, and Calibrated Tactile-sensing Finger](https://ieeexplore.ieee.org/abstract/document/8593661), Donlon et al., IROS 2018

- [Sensing the Frictional State of a Robotic Skin via Subtractive Color Mixing](https://ieeexplore.ieee.org/abstract/document/8613793), Lin et al., RAL 2019

- [Development of a Vision-Based Soft Tactile Muscularis](https://ieeexplore.ieee.org/abstract/document/8722814), Duong et al., RoboSoft 2019

- [Design, Motivation and Evaluation of a Full-Resolution Optical Tactile Sensor](https://www.mdpi.com/1424-8220/19/4/928), Sferrazza et al., MDPI Sensors 2019

- [Transfer learning for vision-based tactile sensing](https://ieeexplore.ieee.org/abstract/document/8967571), Sferrazza et al., IROS 2019

- [Dense Tactile Force Estimation using GelSlim and inverse FEM](https://ieeexplore.ieee.org/abstract/document/8794113), Ma et al., ICRA 2019

- [Soft-bubble: A highly compliant dense geometry tactile sensor for robot manipulation](https://ieeexplore.ieee.org/abstract/document/8722713), Alspach et al., RoboSoft 2019

- [Soft-Bubble grippers for robust and perceptive manipulation](https://ieeexplore.ieee.org/abstract/document/9341534), Kuppuswamy et al., IROS 2020

- [GelTip: A Finger-shaped Optical Tactile Sensor for Robotic Manipulation](https://ieeexplore.ieee.org/abstract/document/9340881), Gomes et al., IROS 2020

- [A Novel Dynamic-Vision-Based Approach for Tactile Sensing Applications](https://ieeexplore.ieee.org/abstract/document/8723387), Naeini et al., Trans. Instrum. Meas. 2020

- [OmniTact: A Multi-Directional High-Resolution Touch Sensor](https://ieeexplore.ieee.org/abstract/document/9196712), Padmanabha1 et al., ICRA 2020

- [DIGIT: A Novel Design for a Low-Cost Compact High-Resolution Tactile Sensor with Application to In-Hand Manipulation](https://ieeexplore.ieee.org/abstract/document/9018215), Lambeta et al., RAL 2020

- [VTacArm: A Vision-based Tactile Sensing Augmented Robotic Arm with Application to Human-robot Interaction](https://ieeexplore.ieee.org/abstract/document/9217019), Zhang et al., CASE 2020

- [Soft, Round, High Resolution Tactile Fingertip Sensors for Dexterous Robotic Manipulation](https://ieeexplore.ieee.org/abstract/document/9196909), Romero et al., ICRA 2020

- [Towards vision-based robotic skins: a data-driven, multi-camera tactile sensor](https://ieeexplore.ieee.org/abstract/document/9116060), Trueeb et al., RoboSoft 2020

- [Exoskeleton-covered soft finger with vision-based proprioception and tactile sensing](https://ieeexplore.ieee.org/abstract/document/9197369), She et al., ICRA 2020

- [F-TOUCH Sensor for Three-Axis Forces Measurement and Geometry Observation](https://ieeexplore.ieee.org/document/9278600), Li et al., IEEE SENSORS 2020

- [Design of a Fully Actuated Robotic Hand With Multiple Gelsight Tactile Sensors](https://arxiv.org/abs/2002.02474), Wilson et al., arxiv 2020

- [A Miniaturised Neuromorphic Tactile Sensor integrated with an Anthropomorphic Robot Hand](https://ieeexplore.ieee.org/document/9341391), Ward-Cherrier et al., IROS 2020

- [TouchRoller: A Rolling Optical Tactile Sensor for Rapid Assessment of Large Surfaces](https://arxiv.org/abs/2103.00595), Cao et al., arxiv 2021

- [Variable compliance and geometry regulation of Soft-Bubble grippers with active pressure control](https://ieeexplore.ieee.org/abstract/document/9479228), Joonhigh et al., RoboSoft 2021

- [Monocular Depth Estimation for Soft Visuotactile Sensors](https://ieeexplore.ieee.org/abstract/document/9479234), Ambrus et al., RoboSoft 2021

- [SEED: Series Elastic End Effectors in 6D for Visuotactile Tool Use](https://arxiv.org/abs/2111.01376), Suh et al., arxiv 2021

- [Viko: An Adaptive Gecko Gripper with Vision-based Tactile Sensor](https://ieeexplore.ieee.org/abstract/document/9561606), Pang et al., ICRA 2021

- [GelSight Wedge: Measuring High-Resolution 3D Contact Geometry with a Compact Robot Finger](https://ieeexplore.ieee.org/abstract/document/9560783), Wang et al., ICRA 2021

- [A Tactile Sensing Foot for Single Robot Leg Stabilization](https://ieeexplore.ieee.org/abstract/document/9560967), Zhang et al., ICRA 2021

- [High-Resolution 3-Dimensional Contact Deformation Tracking for FingerVision Sensor With Dense Random Color Pattern](https://ieeexplore.ieee.org/abstract/document/9361253), Du et al., RAL 2021

- [StRETcH: a Soft to Resistive Elastic Tactile Hand](https://ieeexplore.ieee.org/abstract/document/9561822), Matl et al., ICRA 2021

- [FingerVision with Whiskers: Light Touch Detection with Vision-based Tactile Sensors](https://ieeexplore.ieee.org/abstract/document/9699987), Yamaguchi et al., IRC 2021

- [Visiflex: A Low-Cost Compliant Tactile Fingertip for Force, Torque, and Contact Sensing](https://ieeexplore.ieee.org/abstract/document/9361260), Fernandez et al., RAL 2021

- [Vision-Based Tactile Sensor Mechanism for the Estimation of Contact Position and Force Distribution Using Deep Learning](https://www.mdpi.com/1424-8220/21/5/1920/htm), Kakani et al., MDPI Sensors 2021

- [Large-Scale Vision-Based Tactile Sensing for Robot Links: Design, Modeling, and Evaluation](https://ieeexplore.ieee.org/document/9247533), Duong et al., TRO 2021

- [GelSlim 3.0: High-Resolution Measurement of Shape, Force and Slip in a Compact Tactile-Sensing Finger](https://ieeexplore.ieee.org/abstract/document/9811832), Taylor et al., ICRA 2022

- [In-Hand Object Localization Using a Novel High-Resolution Visuotactile Sensor](https://ieeexplore.ieee.org/abstract/document/9464700), Cui et al., Trans. Ind. Electron. 2022

- [DelTact: A Vision-based Tactile Sensor Using Dense Color Pattern](https://arxiv.org/abs/2202.02179), Zhang et al., arxiv 2022

- [A soft thumb-sized vision-based sensor with accurate all-round force perception](https://www.nature.com/articles/s42256-021-00439-3), Sun et al., Nature Machine Intelligence 2022

- [Soft-Jig: A Flexible Sensing Jig for Simultaneously Fixing and Estimating Orientation of Assembly Parts](https://ieeexplore.ieee.org/abstract/document/9812094), Sakuma et al., ICRA 2022

- [DigiTac: A DIGIT-TacTip Hybrid Tactile Sensor for Comparing Low-Cost High-Resolution Robot Touch](https://ieeexplore.ieee.org/abstract/document/9829271), Lepora et al., RAL 2022

- [Model-Based 3D Contact Geometry Perception for Visual Tactile Sensor](https://www.mdpi.com/1424-8220/22/17/6470), Ji et al., MDPI Sensors 2022

- [TaTa: A Universal Jamming Gripper with High-Quality Tactile Perception and Its Application to Underwater Manipulation](https://ieeexplore.ieee.org/document/9811806), Li et al., ICRA 2022

- [HaptiTemp: A Next-Generation Thermosensitive GelSight-Like Visuotactile Sensor](https://ieeexplore.ieee.org/abstract/document/9652522), Abad et al., IEEE Sensors 2022

- [DenseTact: Optical Tactile Sensor for Dense Shape Reconstruction](https://ieeexplore.ieee.org/abstract/document/9811966), Do et al., ICRA 2022

- [DenseTact 2.0: Optical Tactile Sensor for Shape and Force Reconstruction](https://arxiv.org/abs/2209.10122), Do et al., arxiv 2022

- [Implementing Monocular Visual-Tactile Sensors for Robust Manipulation](https://spj.sciencemag.org/journals/cbsystems/2022/9797562/), Li et al., CBS 2022

- [DTact: A Vision-Based Tactile Sensor that Measures High-Resolution 3D Geometry Directly from Darkness](https://arxiv.org/abs/2209.13916), Lin et al., arxiv 2022

- [Design of a Biomimetic Tactile Sensor for Material Classification](https://ieeexplore.ieee.org/document/9811543), Dai et al., ICRA 2022

- [GelSight Fin Ray: Incorporating Tactile Sensing into a Soft Compliant Robotic Gripper](https://ieeexplore.ieee.org/document/9762175), Liu et al., RoboSoft 2022

- [Soft Robotic Link with Controllable Transparency for Vision-based Tactile and Proximity Sensing](https://arxiv.org/abs/2211.03253), Luu et al., arxiv 2022

- [HiVTac: A High-Speed Vision-Based Tactile Sensor for Precise and Real-Time Force Reconstruction with Fewer Markers](https://www.mdpi.com/1424-8220/22/11/4196/htm), Quan et al., MDPI Sensors 2022

- [Multidimensional Tactile Sensor with a Thin Compound Eye-Inspired Imaging System](https://www.liebertpub.com/doi/full/10.1089/soro.2020.0202), Zhang et al., Soft Robotics 2022

- [3D Contact Point Cloud Reconstruction From Vision-Based Tactile Flow](https://ieeexplore.ieee.org/document/9919353), Du et al., RAL 2022

- [TacRot: A Parallel-Jaw Gripper with Rotatable Tactile Sensors for In-Hand Manipulation](https://ieeexplore.ieee.org/abstract/document/9945388), Zhang et al., SMC 2022

<!---
- [](), xxx et al., yyy 20
-->


### Visual-Tactile

- [Combining Finger Vision and Optical Tactile Sensing: Reducing and Handling Errors While Cutting Vegetables](https://ieeexplore.ieee.org/abstract/document/7803400), Yamaguchi et al., Humanoids 2016

- [Robotic grasp control with high-resolution combined tactile and proximity sensing](https://ieeexplore.ieee.org/abstract/document/7487126), Shimonomura et al., ICRA 2016

- [Seeing Through your Skin: Recognizing Objects with a Novel Visuotactile Sensor](https://openaccess.thecvf.com/content/WACV2021/papers/Hogan_Seeing_Through_Your_Skin_Recognizing_Objects_With_a_Novel_Visuotactile_WACV_2021_paper.pdf), Hogan et al., WACV 2021

- [Finger-STS: Combined Proximity and Tactile Sensing for Robotic Manipulation](https://ieeexplore.ieee.org/abstract/document/9832483), Hogan et al., RAL 2022

- [SpecTac: A Visual-Tactile Dual-Modality Sensor Using UV Illumination](https://ieeexplore.ieee.org/abstract/document/9812348), Wang et al., ICRA 2022


### Non-Vision-Based

- [Flexible Capacitive Tactile Sensor Array With Truncated Pyramids as Dielectric Layer for Three-Axis Force Measurement](https://ieeexplore.ieee.org/abstract/document/7084588), Liang et al., JMEMS 2015

- [A hierarchically patterned, bioinspired e-skin able to detect the direction of applied pressure for robotics](https://www.science.org/doi/abs/10.1126/scirobotics.aau6914), Boutry et al., Science Robotics 2018

- [Data-Driven Super-Resolution on a Tactile Dome](https://ieeexplore.ieee.org/abstract/document/8276589), xxx et al., RAL 2018

- [Touch Sensors with Overlapping Signals: Concept Investigation on Planar Sensors with Resistive or Optical Transduction](https://arxiv.org/abs/1802.08209), Piacenza et al., arxiv 2018

- [Learning the Signatures of the Human Grasp Using a Scalable Tactile Glove](https://www.nature.com/articles/s41586-019-1234-z), Sundaram et al., Nature 2019

- [A Sensorized Multicurved Robot Finger With Data-Driven Touch Sensing via Overlapping Light Signals](https://ieeexplore.ieee.org/document/9006916), Piacenza et al., Transactions on Mechatronics 2020

- [Skin-inspired quadruple tactile sensors integrated on a robot hand enable object recognition](https://www.science.org/doi/abs/10.1126/scirobotics.abc8134), Li et al., Science Robotics 2020

- [Event-Driven Visual-Tactile Sensing and Learning for Robots](https://arxiv.org/abs/2009.07083), Taunyazov et al., arxiv 2020

- [Extended Tactile Perception: Vibration Sensing through Tools and Grasped Objects](https://ieeexplore.ieee.org/abstract/document/9636677), Taunyazov et al., IROS 2021

- [Haptic-feedback smart glove as a creative human-machine interface (HMI) for virtual/augmented reality applications](https://www.science.org/doi/full/10.1126/sciadv.aaz8693), Zhu et al., Science Advances 2020

- [Soft magnetic skin for super-resolution tactile sensing with force self-decoupling](https://www.science.org/doi/abs/10.1126/scirobotics.abc8801), Yan et al., Science Robotics 2021

- [ReSkin: versatile, replaceable, lasting tactile skins](https://arxiv.org/abs/2111.00071), Bhirangi et al., arxiv 2021

- [IntelligentCarpet: Inferring 3D Human Pose from Tactile Signals](https://openaccess.thecvf.com/content/CVPR2021/html/Luo_Intelligent_Carpet_Inferring_3D_Human_Pose_From_Tactile_Signals_CVPR_2021_paper.html), Yiyue Luo et al., CVPR 2021

- [Learning Human-environment Interactions using Conformal Tactile Textiles](https://www.nature.com/articles/s41928-021-00558-0), Luo et al., Nature Electronics 2021

- [Design of a 3D-Printed Soft Robotic Hand With Integrated Distributed Tactile Sensing](https://ieeexplore.ieee.org/abstract/document/9706272), Shorthose et al., RAL 2022

- [A Biomimetic Tactile Palm for Robotic Object Manipulation](https://ieeexplore.ieee.org/document/9869694), Lei et al., RAL 2022

- [Contact Shape and Pose Recognition: Utilizing a Multipole Magnetic Tactile Sensor with a Metalearning Model](https://ieeexplore.ieee.org/document/9869758), Xia et al., MRA 2022



## Applications
<!---
- [](), xxx et al., yyy 2022
-->

### Manipulation/Grasping
- [Localization and manipulation of small parts using GelSight tactile sensing](https://ieeexplore.ieee.org/abstract/document/6943123), Li et al., IROS 2014

- [Tactile-Based Insertion for Dense Box-Packing](https://ieeexplore.ieee.org/abstract/document/8968204), Dong et al., IROS 2019

- [Maintaining Grasps within Slipping Bounds by Monitoring Incipient Slip](https://ieeexplore.ieee.org/abstract/document/8794219), Dong et al., ICRA 2019

- [Manipulation by feel: Touch-based control with deep predictive models](https://ieeexplore.ieee.org/abstract/document/8793538), Tian et al., ICRA 2019

- [Building a Library of Tactile Skills Based on FingerVision](https://ieeexplore.ieee.org/abstract/document/9035000), Belousov et al., Humanoids 2019

- [Self-Attention Based Visual-Tactile Fusion Learning for Predicting Grasp Outcomes](https://ieeexplore.ieee.org/abstract/document/9145654), Cui et al., RAL 2020

- [Deep Reinforcement Learning for Tactile Robotics: Learning to Type on a Braille Keyboard](https://ieeexplore.ieee.org/abstract/document/9144378), Church et al., RAL 2020

- [Swingbot: Learning physical features from in-hand tac?tile exploration for dynamic swing-up manipulation](https://ieeexplore.ieee.org/abstract/document/9341006), Wang et al., IROS 2020

- [Tactile Dexterity: Manipulation Primitives with Tactile Feedback](https://ieeexplore.ieee.org/abstract/document/9196976), Hogan et al., ICRA 2020

- [Cable manipulation with a tactile-reactive gripper](https://journals.sagepub.com/doi/full/10.1177/02783649211027233), She et al., IJRR 2021

- [A Robust Controller for Stable 3D Pinching Using Tactile Sensing](https://ieeexplore.ieee.org/abstract/document/9511836), Psomopoulou et al., RAL 2021

- [Tactile-RL for Insertion: Generalization to Objects of Unknown Geometry](https://ieeexplore.ieee.org/abstract/document/9561646), Dong et al., ICRA 2021

- [Improving Grasp Stability with Rotation Measurement from Tactile Sensing](https://ieeexplore.ieee.org/abstract/document/9636488), Kolamuri et al., IROS 2021

- [Dynamic Modeling of Hand-Object Interactions via Tactile Sensing](https://ieeexplore.ieee.org/abstract/document/9636361), Zhang et al., IROS 2021

- [SEED: Series Elastic End Effectors in 6D for Visuotactile Tool Use](https://arxiv.org/abs/2111.01376), Suh et al., arxiv 2021

- [Meta-Residual Policy Learning: Zero-Trial Robot Skill Adaptation via Knowledge Fusion](https://ieeexplore.ieee.org/abstract/document/9697332), Hao et al., RAL 2022

- [Active Visuo-Tactile Interactive Robotic Perception for Accurate Object Pose Estimation in Dense Clutter](https://ieeexplore.ieee.org/abstract/document/9709520), Murali et al., RAL 2022

- [Autonomous Learning of Page Flipping Movements via Tactile Feedback](https://ieeexplore.ieee.org/abstract/document/9786532), Zheng et al., TRO 2022

- [Where Shall I Touch? Vision-Guided Tactile Poking for Transparent Object Grasping](https://ieeexplore.ieee.org/abstract/document/9882387), Jiang et al., Transactions on Mechatronics 2022

- [Efficient Tactile Simulation with Differentiability for Robotic Manipulation](https://openreview.net/forum?id=6BIffCl6gsM), Xu et al., CoRL 2022

- [Tactile Pose Estimation and Policy Learning for Unknown Object Manipulation](https://arxiv.org/abs/2203.10685), Kelestemur et al., arxiv 2022

- [Visuo-Tactile Transformers for Manipulation](https://arxiv.org/abs/2210.00121), Chen et al., arxiv 2022

- [Grasp Stability Prediction with Sim-to-Real Transfer from Tactile Sensing](https://arxiv.org/abs/2208.02885), Si et al., arxiv 2022

- [Safely Learning Visuo-Tactile Feedback Policies in Real For Industrial Insertion](https://arxiv.org/abs/2210.01340), Fu et al., arxiv 2022

- [Manipulation via Membranes: High-Resolution and Highly Deformable Tactile Sensing and Control](https://arxiv.org/abs/2209.13432), Oller et al., arxiv 2022

- [Learning Self-Supervised Representations from Vision and Touch for Active Sliding Perception of Deformable Surfaces](https://arxiv.org/abs/2209.13042), Kerr et al., arxiv 2022

- [Active Extrinsic Contact Sensing: Application to General Peg-in-Hole Insertion](https://ieeexplore.ieee.org/abstract/document/9812017), Kim et al., ICRA 2022

- [Task-Driven In-Hand Manipulation of Unknown Objects with Tactile Sensing](https://arxiv.org/abs/2210.13403), Pan et al., arxiv 2022

- [Visual-tactile Fusion for Transparent Object Grasping in Complex Backgrounds](https://arxiv.org/abs/2211.16693), Li et al., arxiv 2022

### Classification/Recognition
- [Majority Voting: Material Classification by Tactile Sensing Using Surface Texture](https://ieeexplore.ieee.org/abstract/document/5756488), Jamali et al., TRO 2011

- [Sensing and recognizing surface textures using a gelsight sensor](https://www.cv-foundation.org/openaccess/content_cvpr_2013/html/Li_Sensing_and_Recognizing_2013_CVPR_paper.html), Li et al., CVPR 2013

- [Connecting Look and Feel: Associating the visual and tactile properties of physical materials](https://openaccess.thecvf.com/content_cvpr_2017/html/Yuan_Connecting_Look_and_CVPR_2017_paper.html), Yuan et al., CVPR 2017

- [Shape-independent hardness estimation using deep learning and a GelSight tactile sensor](https://ieeexplore.ieee.org/abstract/document/7989116), Yuan et al., ICRA 2017

- [Vitac: Feature sharing between vision and tactile sensing for cloth texture recognition](https://ieeexplore.ieee.org/abstract/document/8460494), Yuan et al., ICRA 2018

- [Active clothing material perception using tactile sensing and deep learning](https://ieeexplore.ieee.org/abstract/document/8461164), Yuan et al., ICRA 2018

- [Understanding Dynamic Tactile Sensing for Liquid Property Estimation](https://arxiv.org/abs/2205.08771), Huang et al., arxiv 2022

- [Visuotactile Affordances for Cloth Manipulation with Local Control](https://arxiv.org/abs/2212.05108), Sunil et al., arxiv 2022

- [See, Hear, and Feel: Smart Sensory Fusion for Robotic Manipulation](https://arxiv.org/abs/2212.03858), Li et al., arxiv 2022


### Mapping/Localization
- [Tracking objects with point clouds from vision and touch](https://ieeexplore.ieee.org/abstract/document/7989460), Izatt et al., ICRA 2017

- [3D Shape Perception from Monocular Vision, Touch, and Shape Priors](https://ieeexplore.ieee.org/abstract/document/8593430), Wang et al., IROS 2018

- [From Pixels to Percepts: Highly Robust Edge Perception and Contour Following Using Deep Learning and an Optical Biomimetic Tactile Sensor](https://ieeexplore.ieee.org/abstract/document/8641397), Lepora et al., RAL 2019

- [Convolutional Autoencoder for Feature Extraction in Tactile Sensing](https://ieeexplore.ieee.org/abstract/document/8758942), Polic et al., RAL 2019

- [Tactile Mapping and Localization from High-Resolution Tactile Imprints](https://ieeexplore.ieee.org/abstract/document/8794298), Bauza et al., ICRA 2019

- [Fast Model-Based Contact Patch and Pose Estimation for Highly Deformable Dense-Geometry Tactile Sensors](https://ieeexplore.ieee.org/document/8936859), Kuppuswamy et al., RAL 2020

- [Deep Gated Multi-modal Learning: In-hand Object Pose Changes Estimation using Tactile and Image Data](https://ieeexplore.ieee.org/abstract/document/9341799), Anzai et al., IROS 2020

- [3D Shape Reconstruction from Vision and Touch](https://proceedings.neurips.cc/paper/2020/hash/a3842ed7b3d0fe3ac263bcabd2999790-Abstract.html), Smith et al., NeurIPS 2020

- [Tactile SLAM: Real-time inference of shape and pose from planar pushing](https://ieeexplore.ieee.org/abstract/document/9562060), Suresh et al., ICRA 2021

- [Tactile Object Pose Estimation from the First Touch with Geometric Contact Rendering](https://proceedings.mlr.press/v155/villalonga21a.html), Bauza et al., CoRL 2021

- [Active 3D Shape Reconstruction from Vision and Touch](https://proceedings.neurips.cc/paper/2021/hash/8635b5fd6bc675033fb72e8a3ccc10a0-Abstract.html), Smith et al., NeurIPS 2021

- [Active Visuo-Tactile Point Cloud Registration for Accurate Pose Estimation of Objects in an Unknown Workspace
](https://arxiv.org/abs/2108.04015), Murali et al., arxiv 2021

- [Tac2Pose: Tactile Object Pose Estimation from the First Touch](https://arxiv.org/abs/2204.11701), Bauza et al., arxiv 2022

- [ShapeMap 3-D: Efficient shape mapping through dense touch and vision](https://ieeexplore.ieee.org/abstract/document/9812040), Suresh et al., ICRA 2022

- [PatchGraph: In-hand tactile tracking with learned surface normals](https://ieeexplore.ieee.org/abstract/document/9811953), Sodhi et al., ICRA 2022

- [MidasTouch: Monte-Carlo inference over distributions across sliding touch](https://openreview.net/forum?id=JWROnOf4w-K), Suresh et al., CoRL 2022

- [Enhancing Generalizable 6D Pose Tracking of an In-Hand Object with Tactile Sensing](https://arxiv.org/abs/2210.04026), Xu et al., arxiv 2022

- [Using Collocated Vision and Tactile Sensors for Visual Servoing and Localization](https://arxiv.org/abs/2204.11686), Chaudhury et al., arxiv 2022

- [Simultaneous Contact Location and Object Pose Estimation Using Proprioception and Tactile Feedback](https://arxiv.org/abs/2206.01245), Sipos et al., arxiv 2022

- [VisuoTactile 6D Pose Estimation of an In-Hand Object Using Vision and Tactile Sensor Data](https://ieeexplore.ieee.org/abstract/document/9682507), Dikhale et al., RAL 2022

### Extrinsic Contact Sensing
- [Extrinsic Contact Sensing with Relative-Motion Tracking from Distributed Tactile Measurements](https://ieeexplore.ieee.org/abstract/document/9561781), Ma et al., ICRA 2021

- [Neural Contact Fields: Tracking Extrinsic Contact with Tactile Sensing](http://arxiv.org/abs/2210.09297), Higuera et al., arxiv 2022


### Others
- [Exploiting Distributed Tactile Sensors to Drive a Robot Arm Through Obstacles](https://ieeexplore.ieee.org/abstract/document/9384158), Albini et al., RAL 2021

- [Extended Tactile Perception: Vibration Sensing through Tools and Grasped Objects](https://ieeexplore.ieee.org/abstract/document/9636677), Taunyazov et al., IROS 2021

- [MidasTouch: Monte-Carlo inference over distributions across sliding touch](https://openreview.net/forum?id=JWROnOf4w-K), Suresh et al., CoRL 2022

- [SLURP! Spectroscopy of Liquids Using Robot Pre-Touch Sensing](https://arxiv.org/abs/2210.04941), Hanson et al., arxiv 2022

- [Touching a NeRF: Leveraging Neural Radiance Fields for Tactile Sensory Data Generation](https://openreview.net/pdf?id=No3mbanRlZJ), Zhong et al., CoRL 2022

- [Learning to Synthesize Volumetric Meshes from Vision-based Tactile Imprints](https://arxiv.org/abs/2203.15155v1), Zhu et al., arxiv 2022

- [Going In Blind: Object Motion Classification using Distributed Tactile Sensing for Safe Reaching in Clutter](https://arxiv.org/abs/2210.00137), Thomasson et al., arxiv 2022

- [Touch and Go: Learning from Human-Collected Vision and Touch](https://openreview.net/forum?id=ZZ3FeSSPPblo), Yang et al., NeurIPS 2022

- [Development and Evaluation of a Learning-based Model for Real-time Haptic Texture Rendering](https://arxiv.org/abs/2212.13332), Heravi et al., arxiv 2022

## Software

### Simulator
- [Generation of GelSight Tactile Images for Sim2Real Learning](https://ieeexplore.ieee.org/abstract/document/9369877), Gomes et al., RAL 2021

- [Simulation of Vision-based Tactile Sensors using Physics based Rendering](https://ieeexplore.ieee.org/document/9561122), Agarwal et al., ICRA 2021

- [Tactile Gym 2.0: Sim-to-Real Deep Reinforcement Learning for Comparing Low-Cost High-Resolution Robot Touch](https://ieeexplore.ieee.org/abstract/document/9847020), Lin et al., RAL 2022

- [TACTO: A Fast, Flexible, and Open-Source Simulator for High-Resolution Vision-Based Tactile Sensors](https://ieeexplore.ieee.org/abstract/document/9697425), Wang et al., RAL 2022

- [Taxim: An Example-Based Simulation Model for GelSight Tactile Sensors](https://ieeexplore.ieee.org/abstract/document/9681378), Si et al., RAL 2022

- [Bidirectional Sim-to-Real Transfer for GelSight Tactile Sensors With CycleGAN](https://ieeexplore.ieee.org/abstract/document/9756938), Chen et al., RAL 2022

- [Learning the Dynamics of Compliant Tool-Environment Interaction for Visuo-Tactile Contact Servoing](https://arxiv.org/abs/2210.03836), Merwe et al., arxiv 2022

- [Efficient Tactile Simulation with Differentiability for Robotic Manipulation](https://openreview.net/forum?id=6BIffCl6gsM), Xu et al., CoRL 2022


### Library
- [PyTouch: A Machine Learning Library for Touch Processing](https://ieeexplore.ieee.org/abstract/document/9561084), Lambeta et al., ICRA 2021



## Review
- [Artificial Sense of Slip—A Review](https://ieeexplore.ieee.org/document/6479676), Francomano et al., IEEE Sensors 2013

- [Tactile Image Sensors Employing Camera: A Review](https://www.mdpi.com/1424-8220/19/18/3933), Shimonomura et al., MDPI Sensors 2019

- [Tactile Sensors for Advanced Intelligent Systems](https://onlinelibrary.wiley.com/doi/full/10.1002/aisy.201900090), Wang et al., Advanced Intelligent Systems 2019

- [On the Design and Development of Vision-based Tactile Sensors](https://link.springer.com/article/10.1007/s10846-021-01431-0), Shah et al., JINT 2021

- [A survey of visuotactile sensing technologies for robotic manipulation](http://www.infocomm-journal.com/znkx/CN/10.11959/j.issn.2096-6652.202222), Cui et al., Chinese Journal of Intelligent Science and Technology 2022

- [Hardware Technology of Vision-Based Tactile Sensor: A Review](https://ieeexplore.ieee.org/abstract/document/9911183), Zhang et al., IEEE Sensors 2022

## Thesis
- [Tactile Measurement with a GelSight Sensor](http://dspace.mit.edu/handle/1721.1/93815), Wenzhen Yuan, Master, 2014
- [Robust object pose estimation with point clouds from vision and touch](http://dspace.mit.edu/handle/1721.1/111867), Gregory Russell, Master, 2017
- [3D shape perception from vision and touch](http://dspace.mit.edu/handle/1721.1/122914), Shaoxiong Wang, Master, 2019
- [Vision-based proprioception of a soft robotic finger with tactile sensing](http://dspace.mit.edu/handle/1721.1/127131), Sandra Q. Liu, Master, 2020
- [Discovering the patterns of human-environment interactions using scalable functional textiles](http://dspace.mit.edu/handle/1721.1/128628), Yiyue Luo, Master, 2020
- [Deformable Object Manipulation with a Tactile Reactive Gripper](http://dspace.mit.edu/handle/1721.1/139946), Neha Sunil, Master, 2021


- [Touching is believing : sensing and analyzing touch information with GelSight](http://dspace.mit.edu/handle/1721.1/99834), Rui Li, Ph.D., 2015
- [High-resolution tactile sensing for robotic perception](http://dspace.mit.edu/handle/1721.1/120267), Wenzhen Yuan, Ph.D., 2018
- [Reactive manipulation with contact models and tactile feedback](http://dspace.mit.edu/handle/1721.1/125476), Francois R. Hogan, Ph.D., 2020
- [Data-driven Tactile Sensing using Spatially Overlapping Signals](https://www.proquest.com/openview/2fe76b59ca5836dc691847d611775430/1?pq-origsite=gscholar&cbl=18750&diss=y), Pedro Piacenza, Ph.D., 2020
- [High-resolution Tactile Sensing for Reactive Robotic Manipulation](http://dspace.mit.edu/handle/1721.1/130764), Siyuan Dong, Ph.D., 2021
- [A general framework for high-resolution robotic tactile sensing: design, simulation, and learning](https://www.research-collection.ethz.ch/handle/20.500.11850/541127), Carmelo Sferrazza, Ph.D., 2022




## Products
- [DIGIT](https://www.gelsight.com/product/digit-tactile-sensor/)
- [GelSight Mini](https://www.gelsight.com/product/gelsight-mini-system/)
- [FingerVision](https://www.fingervision.jp/en/service-product)
- [BioTac](https://syntouchinc.com/robotics/)
- [uSkin](https://xelarobotics.com/en/uskin-sensor)

## Open-Source
### Sensor
- [DTact](https://github.com/linchangyi1/DTact)
- [GelSlim](https://github.com/mcubelab/gelslim)
- [DIGIT](https://github.com/facebookresearch/digit-design)
- [FingerVision](https://github.com/akihikoy/fingervision)
- [OmniTact](https://github.com/s-tian/bench-press)
- [GelSight_1](https://github.com/FrozenPenguinn/GelSight_Sensor)
- [GelSight_2](https://github.com/leo9344/Implementation-of-GelSight)
- [GelSight_3](https://github.com/geiman-uw/fingergelsight)
- [DigiTac](https://github.com/nlepora/digitac-design)
- [TouchRoller](https://github.com/3PTelephant/TouchRoller)
- [ReSkin](https://github.com/raunaqbhirangi/reskin_sensor)
- [Insight](https://github.com/Huanbo-Sun/Haptics-for-Robots-Insight)

### Sensor Support
- [DIGIT_Depth](https://github.com/vocdex/digit-depth)
- [DIGIT_Interface](https://github.com/facebookresearch/digit-interface)
- [GelSight-mini_SDK](https://github.com/gelsightinc/gsrobotics)
- [GelSight_Driver](https://github.com/gizatt/gelsight_driver)
- [GelSight_ROS](https://github.com/hmccarty/gelsight-ros)
- [GelSight_Conversion](https://github.com/gelsightinc/tactiledemo)
- [GelSight_Heightmap](https://github.com/siyuandong16/gelsight_heightmap_reconstruction)
- [GelSight_Tracking_1](https://github.com/GelSight/tracking)
- [GelSight_Tracking_2](https://github.com/personalrobotics/gelslight_tracking)
- [GelSight_Neural_Tracking](https://github.com/wx405557858/neural_tracking_data)
- [GelSlim_Heightmap](https://github.com/siyuandong16/Heightmap_reconstruction_with_GelSlim)

### Simulator/Library
- [Tactile Optical Simulation](https://github.com/CMURoboTouch/tactile_optical_simulation)
- [GelSight_Simulation](https://github.com/danfergo/gelsight_simulation)
- [TACTO](https://github.com/facebookresearch/tacto)
- [Taxim](https://github.com/CMURoboTouch/Taxim)
- [DIGIT-Gazebo](https://github.com/hsp-iit/gazebo-yarp-digit-plugin)
- [PyTouch](https://github.com/facebookresearch/PyTouch)
- [PyTact](https://github.com/hmccarty/pytact)

### Dataset
- [Visual-Tactile_Dataset](https://github.com/tsinghua-rll/Visual-Tactile_Dataset)
- [YCB-Sight](https://github.com/CMURoboTouch/YCB-Sight)
- [DenseTact](https://github.com/armlabstanford/DenseTact)
- [Touch and Go](https://github.com/fredfyyang/Tactile-Driven-Image-Stylization/)

### Algorithms
- [ShapeMap 3-D](https://github.com/rpl-cmu/shape-map-3D)
- [Tactile SLAM](https://github.com/suddhu/gpis-touch-public)
- [pybullet-shape-contact](https://github.com/suddhu/pybullet-shape-contact)
- [PatchGraph](https://github.com/psodhi/tactile-in-hand)
- [TANDEM](https://github.com/jingxixu/tandem-public)
- [Neural Contact Fields (NCF)](https://github.com/carolinahiguera/NCF)
- [Active Extrinsic Contact Sensing](https://github.com/sangwkim/active_extrinsic_contact)











