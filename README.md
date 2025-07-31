# Awesome Touch [![Awesome](https://awesome.re/badge-flat.svg)](https://awesome.re) [![License: MIT](https://img.shields.io/badge/License-MIT-green.svg)](https://opensource.org/licenses/MIT)

## Table of Contents

- [Sensors](#sensors)
  - [Vision-Based](#vision-based)
  - [Visual-Tactile (Multimodal)](#visual-tactile)
  - [Non-Vision-Based](#non-vision-based)
- [Robotics Applications](#robotics-applications)
  - [Manipulation/Grasping](#manipulationgrasping)
  - [Classification/Recognition](#classificationrecognition)
  - [Mapping/Localization](#mappinglocalization)
  - [Extrinsic Contact Sensing](#extrinsic-contact-sensing)
  - [Image Generation](#image-generation)
  - [Representation Learnig](#representation-learning)
  - [Force Estimation](#force-estimation)
  - [LLM/VLM](#llmvlm)
  - [Dexterous Hand Manipulation](#dexterous-hand-manipulation)
  - [Others](#others)
- [Software](#software)
  - [Simulator](#simulator)
  - [Library](#library)
  - [Dataset](#dataset)
- [Review](#review)
- [Thesis](#thesis)
- [Products](#products)
- [Open Source](#open-source)
- [Laboratory](#laboratory)



## Sensors

### Vision-Based
- [Planar and finger-shaped optical tactile sensors for robotic applications](https://ieeexplore.ieee.org/abstract/document/20431), Begej et al., IEEE Journal on Robotics and Automation 1988

- [A finger-shaped tactile sensor using an optical waveguide](https://ieeexplore.ieee.org/abstract/document/390885), Maekawa et al., SMC 1993

- [Vision-based sensor for real-time measuring of surface traction fields](https://ieeexplore.ieee.org/abstract/document/1381228), Kamiyama et al., CG&A 2005

- [Measurement of force vector field of robotic finger using vision-based haptic sensor](https://ieeexplore.ieee.org/abstract/document/4650712), Sato et al., IROS 2008

- [Retrographic sensing for the measurement of surface texture and shape](https://ieeexplore.ieee.org/abstract/document/5206534), Johnson et al., CVPR 2009

- [Finger-Shaped GelForce: Sensor for Measuring Surface Traction Fields for Robotic Hand](https://ieeexplore.ieee.org/abstract/document/5306070), Sato et al., TOH 2010

- [Microgeometry Capture using an Elastomeric Sensor](https://dl.acm.org/doi/abs/10.1145/2010324.1964941), Johnson et al., TOG 2011

- [Localization and Manipulation of Small Parts Using GelSight Tactile Sensing](https://ieeexplore.ieee.org/abstract/document/6943123), Li et al., IROS 2014

- [Measurement of Shear and Slip with a GelSight Tactile Sensor](https://ieeexplore.ieee.org/abstract/document/7139016), Yuan et al., ICRA 2015

- [Combining finger vision and optical tactile sensing: Reducing and handling errors while cutting vegetables](https://ieeexplore.ieee.org/abstract/document/7803400), Yamaguchi et al., Humanoids 2016

- [Improved GelSight Tactile Sensor for Measuring Geometry and Slip](https://ieeexplore.ieee.org/abstract/document/8202149), Dong et al., IROS 2017

- [GelSight: High-Resolution Robot Tactile Sensors for Estimating Geometry and Force](https://www.mdpi.com/1424-8220/17/12/2762), Yuan et al., MDPI Sensors 2017

- [FingerVision Tactile Sensor Design and Slip Detection Using Convolutional LSTM Network](https://arxiv.org/abs/1810.02653), Zhang et al., arxiv 2018

- [The TacTip Family: Soft Optical Tactile Sensors with 3D-Printed Biomimetic Morphologies](https://www.liebertpub.com/doi/full/10.1089/soro.2017.0052), Ward-Cherrier et al., SoRo 2018

- [GelSlim: A High-Resolution, Compact, Robust, and Calibrated Tactile-sensing Finger](https://ieeexplore.ieee.org/abstract/document/8593661), Donlon et al., IROS 2018

- [Robotic bolt insertion and tightening based on in-hand object localization and force sensing](https://ieeexplore.ieee.org/document/8452338), Nozu et al., AIM 2018

- [Sensing the Frictional State of a Robotic Skin via Subtractive Color Mixing](https://ieeexplore.ieee.org/abstract/document/8613793), Lin et al., RAL 2019

- [Development of a Vision-Based Soft Tactile Muscularis](https://ieeexplore.ieee.org/abstract/document/8722814), Duong et al., RoboSoft 2019

- [Design, Motivation and Evaluation of a Full-Resolution Optical Tactile Sensor](https://www.mdpi.com/1424-8220/19/4/928), Sferrazza et al., MDPI Sensors 2019

- [Transfer learning for vision-based tactile sensing](https://ieeexplore.ieee.org/abstract/document/8967571), Sferrazza et al., IROS 2019

- [An Elastomer-based Flexible Optical Force and Tactile Sensor](https://ieeexplore.ieee.org/abstract/document/8722793), Li et al., RoboSoft 2019

- [Soft-bubble: A highly compliant dense geometry tactile sensor for robot manipulation](https://ieeexplore.ieee.org/abstract/document/8722713), Alspach et al., RoboSoft 2019

- [Event-based Tactile Image Sensor for Detecting Spatio-Temporal Fast Phenomena in Contacts](https://ieeexplore.ieee.org/document/8816132), Kumagai et al., WHC 2019

- [Soft-Bubble grippers for robust and perceptive manipulation](https://ieeexplore.ieee.org/abstract/document/9341534), Kuppuswamy et al., IROS 2020

- [GelTip: A Finger-shaped Optical Tactile Sensor for Robotic Manipulation](https://ieeexplore.ieee.org/abstract/document/9340881), Gomes et al., IROS 2020

- [A Novel Dynamic-Vision-Based Approach for Tactile Sensing Applications](https://ieeexplore.ieee.org/abstract/document/8723387), Naeini et al., Trans. Instrum. Meas. 2020

- [Low-Cost Fiducial-based 6-Axis Force-Torque Sensor](https://ieeexplore.ieee.org/abstract/document/9196925), Ouyang et al., ICRA 2020

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

- [Incipient Slip Detection Method With Vision-Based Tactile Sensor Based on Distribution Force and Deformation](https://ieeexplore.ieee.org/document/9565930), Sui et al., IEEE Sensors 2021

- [Large-Scale Vision-Based Tactile Sensing for Robot Links: Design, Modeling, and Evaluation](https://ieeexplore.ieee.org/document/9247533), Duong et al., TRO 2021

- [GelSlim 3.0: High-Resolution Measurement of Shape, Force and Slip in a Compact Tactile-Sensing Finger](https://ieeexplore.ieee.org/abstract/document/9811832), Taylor et al., ICRA 2022

- [In-Hand Object Localization Using a Novel High-Resolution Visuotactile Sensor](https://ieeexplore.ieee.org/abstract/document/9464700), Cui et al., Trans. Ind. Electron. 2022

- [DelTact: A Vision-based Tactile Sensor Using Dense Color Pattern](https://ieeexplore.ieee.org/abstract/document/9849124), Zhang et al., RAL 2022

- [A soft thumb-sized vision-based sensor with accurate all-round force perception](https://www.nature.com/articles/s42256-021-00439-3), Sun et al., Nature Machine Intelligence 2022

- [Soft-Jig: A Flexible Sensing Jig for Simultaneously Fixing and Estimating Orientation of Assembly Parts](https://ieeexplore.ieee.org/abstract/document/9812094), Sakuma et al., ICRA 2022

- [DigiTac: A DIGIT-TacTip Hybrid Tactile Sensor for Comparing Low-Cost High-Resolution Robot Touch](https://ieeexplore.ieee.org/abstract/document/9829271), Lepora et al., RAL 2022

- [Model-Based 3D Contact Geometry Perception for Visual Tactile Sensor](https://www.mdpi.com/1424-8220/22/17/6470), Ji et al., MDPI Sensors 2022

- [TaTa: A Universal Jamming Gripper with High-Quality Tactile Perception and Its Application to Underwater Manipulation](https://ieeexplore.ieee.org/document/9811806), Li et al., ICRA 2022

- [HaptiTemp: A Next-Generation Thermosensitive GelSight-Like Visuotactile Sensor](https://ieeexplore.ieee.org/abstract/document/9652522), Abad et al., IEEE Sensors 2022

- [DenseTact: Optical Tactile Sensor for Dense Shape Reconstruction](https://ieeexplore.ieee.org/abstract/document/9811966), Do et al., ICRA 2022

- [Implementing Monocular Visual-Tactile Sensors for Robust Manipulation](https://spj.sciencemag.org/journals/cbsystems/2022/9797562/), Li et al., CBS 2022

- [Design of a Biomimetic Tactile Sensor for Material Classification](https://ieeexplore.ieee.org/document/9811543), Dai et al., ICRA 2022

- [GelSight Fin Ray: Incorporating Tactile Sensing into a Soft Compliant Robotic Gripper](https://ieeexplore.ieee.org/document/9762175), Liu et al., RoboSoft 2022

- [Soft Robotic Link with Controllable Transparency for Vision-based Tactile and Proximity Sensing](https://arxiv.org/abs/2211.03253), Luu et al., arxiv 2022

- [HiVTac: A High-Speed Vision-Based Tactile Sensor for Precise and Real-Time Force Reconstruction with Fewer Markers](https://www.mdpi.com/1424-8220/22/11/4196/htm), Quan et al., MDPI Sensors 2022

- [Multidimensional Tactile Sensor with a Thin Compound Eye-Inspired Imaging System](https://www.liebertpub.com/doi/full/10.1089/soro.2020.0202), Zhang et al., Soft Robotics 2022

- [3D Contact Point Cloud Reconstruction From Vision-Based Tactile Flow](https://ieeexplore.ieee.org/document/9919353), Du et al., RAL 2022

- [Elastomer-Based Visuotactile Sensor for Normality of Robotic Manufacturing Systems](https://www.mdpi.com/2073-4360/14/23/5097), Zaid et al., Polymers 2022

- [TacRot: A Parallel-Jaw Gripper with Rotatable Tactile Sensors for In-Hand Manipulation](https://ieeexplore.ieee.org/abstract/document/9945388), Zhang et al., SMC 2022

- [Real-Time Marker Localization Learning for GelStereo Tactile Sensing](https://ieeexplore.ieee.org/abstract/document/10011997), Liu et al., ROBIO 2022

- [Tac3D: A Novel Vision-based Tactile Sensor for Measuring Forces Distribution and Estimating Friction Coefficient Distribution](https://arxiv.org/abs/2202.06211), Zhang et al., arxiv 2022

- [Continuous Marker Patterns for Representing Contact Information in Vision-Based Tactile Sensor: Principle, Algorithm, and Verification](https://ieeexplore.ieee.org/document/9851411), Li et al., Trans. Instrum. Meas. 2022

- [Improving the Force Reconstruction Performance of Vision-Based Tactile Sensors by Optimizing the Elastic Body](https://ieeexplore.ieee.org/abstract/document/10012440), Zhang et al., RAL 2023

- [Improving the Representation and Extraction of Contact Information in Vision-based Tactile Sensors Using Continuous Marker Pattern](https://www.techrxiv.org/articles/preprint/Improving_the_Representation_and_Extraction_of_Contact_Information_in_Vision-based_Tactile_Sensors_Using_Continuous_Marker_Pattern/22217653), Li et al., TechRxiv 2023

- [DotView: A Low-Cost Compact Tactile Sensor for Pressure, Shear, and Torsion Estimation](https://ieeexplore.ieee.org/abstract/document/10005792), Zheng et al., RAL 2023

- [A Novel Vision-Based Tactile Sensor Using Lamination and Gilding Process for Improvement of Outdoor Detection and Maintainability](https://ieeexplore.ieee.org/abstract/document/10006734), Zhang et al., IEEE SENSORS 2023

- [GelStereo Palm: a Novel Curved Visuotactile Sensor for 3D Geometry Sensing](https://ieeexplore.ieee.org/abstract/document/10035880), Hu et al., TII 2023

- [DenseTact 2.0: Optical Tactile Sensor for Shape and Force Reconstruction](https://arxiv.org/abs/2209.10122), Do et al., ICRA 2023

- [DTact: A Vision-Based Tactile Sensor that Measures High-Resolution 3D Geometry Directly from Darkness](https://arxiv.org/abs/2209.13916), Lin et al., ICRA 2023

- [9DTact: A Compact Vision-Based Tactile Sensor for Accurate 3D Shape Reconstruction and Generalizable 6D Force Estimation](https://arxiv.org/abs/2308.14277), Lin et al., RAL 2023

- [A Miniaturised Camera-based Multi-Modal Tactile Sensor](https://arxiv.org/abs/2303.03093), Althoefer et al., arxiv 2023

- [Simulation, Learning, and Application of Vision-Based Tactile Sensing at Large Scale](https://ieeexplore.ieee.org/abstract/document/10054516), Khanh Luu et al., TRO 2023

- [High-Precision 3D Reconstruction Study with Emphasis on Refractive Calibration of GelStereo-Type Sensors](https://www.mdpi.com/1424-8220/23/5/2675), Zhang et al., MDPI Sensors 2023

- [GelSight Baby Fin Ray: A Compact, Compliant, Flexible Finger with High-Resolution Tactile Sensing](https://arxiv.org/abs/2303.14883), Liu et al., arxiv 2023

- [GelSight EndoFlex: A Soft Endoskeleton Hand with Continuous High-Resolution Tactile Sensing](https://arxiv.org/abs/2303.17935.pdf), Liu et al., arxiv 2023

- [GelSight360: An Omnidirectional Camera-Based Tactile Sensor for Dexterous Robotic Manipulation](https://arxiv.org/abs/2304.04268), Tippur et al., arxiv 2023

- [TactiGraph: An Asynchronous Graph Neural Network for Contact Angle Prediction Using Neuromorphic Vision-Based Tactile Sensing](https://www.preprints.org/manuscript/202304.0133/v1), Sajwani et al., preprints 2023

- [A Tactile Sensing Concept for 3D Displacement and 3D Force Measurement using Light Angle and Intensity Sensing](https://www.techrxiv.org/articles/preprint/A_Tactile_Sensing_Concept_for_3D_Displacement_and_3D_Force_Measurement_using_Light_Angle_and_Intensity_Sensing/22593130?file=40112941), Leslie et al., preprints 2023

- [Minsight: a fingertip-sized vision-based tactile sensor for robotic manipulation](https://arxiv.org/abs/2304.10990.pdf), Andrussow et al., arxiv 2023

- [Real-time and Robust Feature Detection of Continuous Marker Pattern for Dense 3-D Deformation Measurement](https://arxiv.org/abs/2305.11782), Mingxuan et al., arxiv 2023

- [Tactile-Reactive Roller Grasper](https://arxiv.org/abs/2306.09946), Yuan et al., arxiv 2023

- [LensLeech: On-Lens Interaction for Arbitrary Camera Devices](https://arxiv.org/abs/2307.00152), Getschmann et al., arxiv 2023

- [L3F-TOUCH: A Wireless GelSight with Decoupled Tactile and Three-axis Force Sensing](https://ieeexplore.ieee.org/abstract/document/10173594), Li et al., RAL 2023

- [AllSight: A Low-Cost and High-Resolution Round Tactile Sensor with Zero-Shot Learning Capability](https://arxiv.org/abs/2307.02928), Azulay et al., arxiv 2023

- [GelFinger: A Novel Visual-Tactile Sensor With Multi-Angle Tactile Image Stitching](https://ieeexplore.ieee.org/abstract/document/10209180), Lin et al., RAL 2023

- [OMsense: An Omni Tactile Sensing Principle Inspired by Compound Eyes](https://ieeexplore.ieee.org/abstract/document/10216356), Yu et al., TMech 2023

- [Proprioceptive Learning with Soft Polyhedral Networks](https://arxiv.org/abs/2308.08538), Liu et al., arxiv 2023

- [A platypus-inspired electro-mechanosensory finger for remote control and tactile sensing](https://www.sciencedirect.com/science/article/pii/S2211285523006274), Mu et al., Nano Energy 2023

- [GelFinger: A Novel Visual-Tactile Sensor With Multi-Angle Tactile Image Stitching](https://ieeexplore.ieee.org/abstract/document/10209180), Lin et al., RAL 2023

- [High-Precision 3D Reconstruction Study with Emphasis on Refractive Calibration of GelStereo-Type Sensors](https://www.mdpi.com/1424-8220/23/5/2675), Zhang et al., MDPI Sensors 2023

- [HSVTac: A High-speed Vision-based Tactile Sensor for Exploring Fingertip Tactile Sensitivity](https://ieeexplore.ieee.org/abstract/document/10234215), Wang et al., IEEE Sensors 2023

- [3D Dense Reconstruction of Vision-based Tactile Sensor with Coded Markers](https://ieeexplore.ieee.org/abstract/document/10238349), Xue et al., TIM 2023

- [WSTac: Interactive Surface Perception based on Whisker-Inspired and Self-Illuminated Vision-Based Tactile Sensor](https://arxiv.org/abs/2308.13241), Lei et al., arxiv 2023

- [DenseTact-Mini: An Optical Tactile Sensor for Grasping Multi-Scale Objects From Flat Surfaces](https://arxiv.org/abs/2309.08860), Do et al., arxiv 2023

- [GelSight Svelte: A Human Finger-shaped Single-camera Tactile Robot Finger with Large Sensing Coverage and Proprioceptive Sensing](https://arxiv.org/abs/2309.10885), Zhao et al., arxiv 2023

- [GelSight Svelte Hand: A Three-finger, Two-DoF, Tactile-rich, Low-cost Robot Hand for Dexterous Manipulation](https://arxiv.org/abs/2309.10886), Zhao et al., arxiv 2023

- [A Vision-Based Tactile Sensing System for Multimodal Contact Information Perception via Neural Network](https://arxiv.org/abs/2310.01986), Xu et al., arxiv 2023

- [Towards Design and Development of an ArUco Markers-Based Quantitative Surface Tactile Sensor](https://arxiv.org/abs/2310.08398), Kara et al., arxiv 2023

- [Dynamic Focusing (DF) Cone-Based Omnidirectional Fingertip Pressure Sensor with High Sensitivity in a Wide Pressure Range](https://www.mdpi.com/1424-8220/23/20/8450), Seo et al., MDPI Sensors 2023

- [MC-Tac: Modular Camera-Based Tactile Sensor for Robot Gripper](https://link.springer.com/chapter/10.1007/978-981-99-6495-6_15), Ren et al., ICIRA 2023

- [Evetac: An Event-based Optical Tactile Sensor for Robotic Manipulation](https://arxiv.org/abs/2312.01236), Funk et al., TRO 2023

- [GelStereo BioTip: Self-Calibrating Bionic Fingertip Visuotactile Sensor for Robotic Manipulation](https://ieeexplore.ieee.org/abstract/document/10358360), Cui et al., TMech 2023

- [A Soft and Inflatable Vision-Based Tactile Sensor for Inspection of Constrained and Confined Spaces](https://ieeexplore.ieee.org/document/10292571), Kim et al., IEEE Sensors 2023

- [AELTac: A vision-based electroluminescent tactile sensing skin for force localization and magnitude estimation](https://ieeexplore.ieee.org/document/10413302), Fu et al., IEEE Sensors 2024

- [TSATac: A Thermoluminescence Enabled Tactile Sensor for Concurrent Perception of Temperature, Pressure, and Shear](https://arxiv.org/abs/2402.00585), Song et al., arxiv 2024

- [ViTacTip: Design and Verification of a Novel Biomimetic Physical Vision-Tactile Fusion Sensor](https://arxiv.org/abs/2402.00199), Fan et al., arxiv 2024

- [MagicTac: A Novel High-Resolution 3D Multi-layer Grid-Based Tactile Sensor](https://arxiv.org/abs/2402.01366), Fan et al., arxiv 2024

- [Scalable, Simulation-Guided Compliant Tactile Finger Design](https://arxiv.org/pdf/2403.04638), Ma et al., arxiv 2024

- [GelLink: A Compact Multi-phalanx Finger with Vision-based Tactile Sensing and Proprioception](https://arxiv.org/pdf/2403.14887), Ma et al., arxiv 2024

- [Using Fiber Optic Bundles to Miniaturize Vision-Based Tactile Sensors](https://arxiv.org/pdf/2403.05500.pdf), Di et al., TRO 2024

- [BioTacTip: A Soft Biomimetic Optical Tactile Sensor for Efficient 3D Contact Localization and 3D Force Estimation](https://ieeexplore.ieee.org/abstract/document/10496158), Li et al., RAL 2024

- [A Passively Bendable, Compliant Tactile Palm with RObotic Modular Endoskeleton Optical (ROMEO) Fingers](https://arxiv.org/pdf/2404.08227.pdf), Liu et al., arxiv 2024

- [Design and Evaluation of a Rapid Monolithic Manufacturing Technique for a Novel Vision-Based Tactile Sensor: C-Sight](https://www.mdpi.com/1424-8220/24/14/4603), Fan et al., MDPI Sensors 2024

- [CrystalTac: 3D-Printed Vision-Based Tactile Sensor Family through Rapid Monolithic Manufacturing Technique](https://arxiv.org/abs/2408.00638), Fan et al., arxiv 2024

- [Large-scale Deployment of Vision-based Tactile Sensors on Multi-fingered Grippers](https://arxiv.org/abs/2408.02206), Wang et al., arxiv 2024

- [EyeSight Hand: Design of a Fully-Actuated Dexterous Robot Hand with Integrated Vision-Based Tactile Sensors and Compliant Actuation](https://arxiv.org/pdf/2408.06265), Romero et al., arxiv 2024

- [RainbowSight: A Family of Generalizable, Curved, Camera-Based Tactile Sensors For Shape Reconstruction](https://ieeexplore.ieee.org/document/10609863), Tippur et al., ICRA 2024

- [TacPalm: A Soft Gripper with a Biomimetic Optical Tactile Palm for Stable Precise Grasping](https://arxiv.org/pdf/2409.15239), Zhang et al., arxiv 2024

- [GelSlim 4.0: Focusing on Touch and Reproducibility](https://arxiv.org/pdf/2409.19770), Sipos et al., arxiv 2024

- [DTactive: A Vision-Based Tactile Sensor with Active Surface](https://arxiv.org/abs/2410.08337), Xu et al., arxiv 2024

- [HumanFT: A Human-like Fingertip Multimodal Visuo-Tactile Sensor](https://arxiv.org/pdf/2410.10353), Wu et al., arxiv 2024

- [MiniTac: An Ultra-Compact 8 mm Vision-Based Tactile Sensor for Enhanced Palpation in Robot-Assisted Minimally Invasive Surgery](https://arxiv.org/abs/2410.22691), Li et al., RAL 2024

- [Digitizing Touch with an Artificial Multimodal Fingertip](https://arxiv.org/pdf/2411.02479), Lambeta et al., Meta 2024

- [NUSense: Robust Soft Optical Tactile Sensor](https://arxiv.org/pdf/2410.23516), Yergibay et al., arxiv 2024

- [Behavioral biometric optical tactile sensor for instantaneous decoupling of dynamic touch signals in real time](https://www.nature.com/articles/s41467-024-52331-4#Sec9), Son et al., Nature Communications 2024

- [Virtual prototyping of vision-based tactile sensors design for robotic-assisted precision machining](https://www.sciencedirect.com/science/article/pii/S0924424724004631), Zaid et al., Sensors and Actuators: A. Physical 2024

- [GelSight FlexiRay: Breaking Planar Limits by Harnessing Large Deformations for Flexible, Full-Coverage Multimodal Sensing](https://arxiv.org/pdf/2411.18979), Wang et al., arxiv 2024

- [GelBelt: A Vision-based Tactile Sensor for Continuous Sensing of Large Surfaces](https://ieeexplore.ieee.org/document/10833742), Mirzaee et al., RAL 2025

- [ThinTact:Thin Vision-Based Tactile Sensor by Lensless Imaging](https://arxiv.org/abs/2501.09273), Xu et al., TRO 2025

- [GelPoLight: A Novel Visual Tactile Sensor Based on Photometric Stereo with Point Lighting](https://ieeexplore.ieee.org/abstract/document/10870064), Lu et al., IEEE Sensors 2025

- [VET: A Visual-Electronic Tactile System for Immersive Human-Machine Interaction](https://arxiv.org/pdf/2503.23440), Zhang et al., arxiv 2025

- [VibTac: A High-Resolution High-Bandwidth Tactile Sensing Finger for Multi-Modal Perception in Robotic Manipulation](https://ieeexplore.ieee.org/document/10965524), Athar et al., ToH 2025

- [A Modularized Design Approach for Gelsight Family of Vision-based Tactile Sensors](https://arxiv.org/pdf/2504.14739), Arpit et al., IJRR 2025

- [PP-Tac: Paper Picking Using Tactile Feedback in Dexterous Robotic Hands](https://arxiv.org/abs/2504.16649), Lin et al., RSS 2025

- [AllTact Fin Ray: A Compliant Robot Gripper with Omni-Directional Tactile Sensing](https://arxiv.org/pdf/2504.18064), Liang et al., arxiv 2025

- [Grasp EveryThing (GET): 1-DoF, 3-Fingered Gripper with Tactile Sensing for Robust Grasping](https://arxiv.org/pdf/2505.09771), Burgess et al., arxiv 2025

- [3D Vision-tactile Reconstruction from Infrared and Visible Images for Robotic Fine-grained Tactile Perception](https://arxiv.org/pdf/2506.15087), Lin et al., arxiv 2025

- [StereoTacTip: Vision-based Tactile Sensing with Biomimetic Skin-Marker Arrangements](https://arxiv.org/pdf/2506.18040), Lu et al., arxiv 2025

- [UTact: Underwater Vision-Based Tactile Sensor with Geometry Reconstruction and Contact Force Estimation](https://advanced.onlinelibrary.wiley.com/doi/pdfdirect/10.1002/adrr.202500091), Zhang et al., Advanced Robotics Research 2025


<!---
- [](), xxx et al., yyy 2023
-->


### Visual-Tactile

- [Combining Finger Vision and Optical Tactile Sensing: Reducing and Handling Errors While Cutting Vegetables](https://ieeexplore.ieee.org/abstract/document/7803400), Yamaguchi et al., Humanoids 2016

- [Robotic grasp control with high-resolution combined tactile and proximity sensing](https://ieeexplore.ieee.org/abstract/document/7487126), Shimonomura et al., ICRA 2016

- [Seeing Through your Skin: Recognizing Objects with a Novel Visuotactile Sensor](https://openaccess.thecvf.com/content/WACV2021/papers/Hogan_Seeing_Through_Your_Skin_Recognizing_Objects_With_a_Novel_Visuotactile_WACV_2021_paper.pdf), Hogan et al., WACV 2021

- [Finger-STS: Combined Proximity and Tactile Sensing for Robotic Manipulation](https://ieeexplore.ieee.org/abstract/document/9832483), Hogan et al., RAL 2022

- [SpecTac: A Visual-Tactile Dual-Modality Sensor Using UV Illumination](https://ieeexplore.ieee.org/abstract/document/9812348), Wang et al., ICRA 2022

- [StereoTac: a Novel Visuotactile Sensor that Combines Tactile Sensing with 3D Vision](https://arxiv.org/abs/2303.06542), Roberge et al., arxiv 2023

- [TIRgel: A Visuo-Tactile Sensor With Total Internal Reflection Mechanism for External Observation and Contact Detection](https://ieeexplore.ieee.org/abstract/document/10224334), Zhang et al., RAL 2023

- [VisTac Toward a Unified Multimodal Sensing Finger for Robotic Manipulation](https://ieeexplore.ieee.org/document/10242327), Athar et al., IEEE Sensors 2023

- [CompdVision: Combining Near-Field 3D Visual and Tactile Sensing Using a Compact Compound-Eye Imaging System](https://arxiv.org/pdf/2312.07146.pdf), Luo et al., arxiv 2023


### Non-Vision-Based

- [Magnetic Resonance-Compatible Tactile Force Sensor Using Fiber Optics and Vision Sensor](https://ieeexplore.ieee.org/abstract/document/6600735), Xie et al.,  IEEE Sensors 2014
- [Flexible Capacitive Tactile Sensor Array With Truncated Pyramids as Dielectric Layer for Three-Axis Force Measurement](https://ieeexplore.ieee.org/abstract/document/7084588), Liang et al., JMEMS 2015

- [A hierarchically patterned, bioinspired e-skin able to detect the direction of applied pressure for robotics](https://www.science.org/doi/abs/10.1126/scirobotics.aau6914), Boutry et al., Science Robotics 2018

- [Data-Driven Super-Resolution on a Tactile Dome](https://ieeexplore.ieee.org/abstract/document/8276589), Piacenza et al., RAL 2018

- [A High-Sensitivity Tactile Sensor Array Based on Fiber Bragg Grating Sensing for Tissue Palpation in Minimally Invasive Surgery](https://ieeexplore.ieee.org/abstract/document/8412604), Li et al., Transactions on Mechatronics 2018

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

- [Guiding the design of superresolution tactile skins with taxel value isolines theory](https://www.science.org/doi/10.1126/scirobotics.abm0608), Sun et al., Science Robotics 2022

- [Reflective Optical Tactile Sensor Based on Fiber Specklegram Analysis With the Capability of Contact Position Identification](https://ieeexplore.ieee.org/abstract/document/9990925), Liu et al., Journal of Lightwave Technology 2023

- [A Multimodal Sensing Ring for Quantification of Scratch Intensity](https://arxiv.org/abs/2302.03813.pdf), Padmanabha et al., arxiv 2023

- [A novel tactile palm for robotic object manipulation](https://arxiv.org/abs/2308.05386.pdf), Zhao et al., arxiv 2023

- [Highly Interpretable Representation for Multi-Dimensional Tactile Perception](https://ieeexplore.ieee.org/abstract/document/10381648), Gui et al., IEEE Transactions on Medical Robotics and Bionics 2024

- [AnySkin: Plug-and-play Skin Sensing for Robotic Touch](https://arxiv.org/pdf/2409.08276), Bhirangi et al., arxiv 2024

- [Design and Benchmarking of A Multi-Modality Sensor for Robotic Manipulation with GAN-Based Cross-Modality Interpretation](https://arxiv.org/abs/2501.02303), Zhang et al., TRO 2025


## Robotics Applications
<!---
- [](), xxx et al., yyy 2023
-->

### Manipulation/Grasping
- [Localization and manipulation of small parts using GelSight tactile sensing](https://ieeexplore.ieee.org/abstract/document/6943123), Li et al., IROS 2014
  
- [Reliable object handover through tactile force sensing and effort control in the Shadow Robot hand](https://ieeexplore.ieee.org/abstract/document/7989048), Eguíluz et al., ICRA 2017
  
- [Reliable robotic handovers through tactile sensing](https://link.springer.com/article/10.1007/s10514-018-09823-2), Eguíluz et al., Autonomous Robots 2019
  
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

- [Learning Generalizable Vision-Tactile Robotic Grasping Strategy for Deformable Objects via Transformer](https://arxiv.org/abs/2112.06374), Han et al., arxiv 2021

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

- [Integrating High-Resolution Tactile Sensing into Grasp Stability Prediction](https://ieeexplore.ieee.org/document/9867102), Chumbley et al., CRV 2022
- [Heuristic grasping of convex objects using 3D imaging and tactile sensing in uncalibrated grasping scenarios](https://www.sciencedirect.com/science/article/pii/S095741742201301X), Eguíluz et al., Expert Systems with Applications 2022

- [Skill generalization of tubular object manipulation with tactile sensing and Sim2Real learning](https://www.sciencedirect.com/science/article/pii/S092188902200210X), Zhao et al., Robotics and Autonomous Systems 2023

- [Learning height for top-down grasps with the DIGIT sensor](https://hal.science/hal-03989704/), Bernardi et al., ICRA 2023

- [Deep Functional Predictive Control for Strawberry Cluster Manipulation using Tactile Prediction](https://arxiv.org/abs/2303.05393), Nazari et al., arxiv 2023

- [Cable Routing and Assembly using Tactile-driven Motion Primitives](https://arxiv.org/abs/2303.11765), Wilson et al., ICRA 2023

- [Tactile-Filter: Interactive Tactile Perception for Part Mating](https://arxiv.org/abs/2303.06034), Ota et al., arxiv 2023

- [Learning to Detect Slip through Tactile Measures of the Contact Force Field and its Entropy](https://arxiv.org/abs/2303.00935.pdf), Hu et al., arxiv 2023

- [Visuo-Tactile Sensor Enabled Pneumatic Device Towards Compliant Oropharyngeal Swab Sampling](https://arxiv.org/abs/2305.06537.pdf), Li et al., arxiv 2023

- [Integrated Object Deformation and Contact Patch Estimation from Visuo-Tactile Feedback](https://arxiv.org/abs/2305.14470.pdf), Merwe et al., arxiv 2023

- [Learning-Based Slip Detection for Dexterous Manipulation Using GelStereo Sensing](https://ieeexplore.ieee.org/abstract/document/10132406), Cui et al., TRANSACTIONS ON NEURAL NETWORKS AND LEARNING SYSTEMS 2023

- [Enabling Robot Manipulation of Soft and Rigid Objects with Vision-based Tactile Sensors](https://arxiv.org/pdf/2306.05791.pdf), Welle et al., arxiv 2023

- [TacMMs: Tactile Mobile Manipulators for Warehouse Automation](https://ieeexplore.ieee.org/abstract/document/10155191), He et al., RAL 2023

- [Visual-Tactile Learning of Garment Unfolding for Robot-Assisted Dressing](https://ieeexplore.ieee.org/abstract/document/10185075), Zhang et al., RAL 2023

- [Grasp Stability Assessment Through Attention-Guided Cross-Modality Fusion and Transfer Learning](https://arxiv.org/abs/2308.00980), Zhang et al., arxiv 2023

- [TactileVAD: Geometric Aliasing-Aware Dynamics for High-Resolution Tactile Control](https://openreview.net/forum?id=FefFLN5FvIM), Oller et al., CoRL 2023

- [Precise Robotic Needle-Threading with Tactile Perception and Reinforcement Learning](https://openreview.net/forum?id=B7PnAw4ze0l), Yu et al., CoRL 2023

- [General In-hand Object Rotation with Vision and Touch](https://openreview.net/forum?id=RN00jfIV-X), Qi et al., CoRL 2023

- [Inter-finger Small Object Manipulation with DenseTact Optical Tactile Sensor](https://arxiv.org/abs/2308.16480), Do et al., arxiv 2023

- [Embedded Object Detection and Mapping in Soft Materials Using Optical Tactile Sensing](https://arxiv.org/abs/2308.11087), Solano-Castellanos et al., arxiv 2023

- [VisTac Towards a Unified Multi-Modal Sensing Finger for Robotic Manipulation](https://ieeexplore.ieee.org/abstract/document/10242327), Athar et al., IEEE Sensors 2023

- [Laboratory Automation: Precision Insertion with Adaptive Fingers utilizing Contact through Sliding with Tactile-based Pose Estimation](https://arxiv.org/abs/2309.16170), Pai et al., arxiv 2023

- [AcTExplore: Active Tactile Exploration on Unknown Objects](https://arxiv.org/abs/2310.08745), Shahidzadeh et al., arxiv 2023

- [MimicTouch: Learning Human's Control Strategy with Multi-Modal Tactile Feedbacks](https://arxiv.org/abs/2310.16917), Yu et al., arxiv 2023

- [Tactile Active Inference Reinforcement Learning for Efficient Robotic Manipulation Skill Acquisition](https://arxiv.org/abs/2311.11287), Liu et al., arxiv 2023

- [Evetac: An Event-based Optical Tactile Sensor for Robotic Manipulation](https://arxiv.org/abs/2312.01236), Funk et al., TRO 2023

- [Pose and shear-based tactile servoing](https://arxiv.org/abs/2312.08411.pdf), Lloyd et al., IJRR 2023

- [GelStereo BioTip: Self-Calibrating Bionic Fingertip Visuotactile Sensor for Robotic Manipulation](https://ieeexplore.ieee.org/abstract/document/10358360), Cui et al., TMech 2023

- [Perceiving Extrinsic Contacts from Touch Improves Learning Insertion Policies](https://arxiv.org/abs/2309.16652), Higuera et al., arxiv 2023

- [Neural feels with neural fields: Visuo-tactile perception for in-hand manipulation](https://arxiv.org/abs/2312.13469), Suresh et al., arxiv 2023

- [The Power of the Senses: Generalizable Manipulation from Vision and Touch through Masked Multimodal Learning](https://arxiv.org/pdf/2311.00924), Sferrazza et al., arxiv 2023

- [TEXterity: Tactile Extrinsic deXterity](https://arxiv.org/abs/2401.10230), Bronars et al., arxiv 2024

- [Tac-Man: Tactile-Informed Prior-Free Manipulation of Articulated Objects](https://arxiv.org/abs/2403.01694), Zhao et al., arxiv 2024

- [LeTac-MPC: Learning Model Predictive Control for Tactile-reactive Grasping](https://arxiv.org/pdf/2403.04934), Xu et al., arxiv 2024

- [Visuo-Tactile Pretraining for Cable Plugging](https://arxiv.org/pdf/2403.11898), George et al., arxiv 2024

- [Stable Object Placing using Curl and Diff Features of Vision-based Tactile Sensors](https://arxiv.org/pdf/2403.19129), Takahashi et al., arxiv 2024

- [DexiTac: Soft Dexterous Tactile Gripping](https://ieeexplore.ieee.org/abstract/document/10505922), Lu et al., Transactions on Mechatronics 2024

- [Learning Tactile Insertion in the Real World](https://arxiv.org/abs/2405.00383), Palenicek et al., arxiv 2024

- [Generalize by Touching: Tactile Ensemble Skill Transfer for Robotic Furniture Assembly](https://arxiv.org/pdf/2404.17684), Lin et al., ICRA 2024

- [SimPLE, a visuotactile method learned in simulation to precisely pick, localize, regrasp, and place objects](https://www.science.org/doi/10.1126/scirobotics.adi8808#:~:text=SimPLE%20learns%20to%20pick%2C%20regrasp,visuotactile%20perception%2C%20and%20regrasp%20planning.), Bauza et al., Science Robotics 2024

- [RoTipBot: Robotic Handling of Thin and Flexible Objects using Rotatable Tactile Sensors](https://arxiv.org/abs/2406.09332), Jiang et al., arxiv 2024

- [RoboPack: Learning Tactile-Informed Dynamics Models for Dense Packing](https://arxiv.org/abs/2407.01418), Ai et al., RSS 2024

- [Learning In-Hand Translation Using Tactile Skin With Shear and Normal Force Sensing](https://arxiv.org/pdf/2407.07885), Yin et al., arxiv 2024

- [Jointly Understand Visual and Tactile Signals](https://openreview.net/pdf?id=NtQqIcSbqv), Li et al., ICLR 2024

- [In-Hand Singulation and Scooping Manipulation with a 5 DOF Tactile Gripper](https://arxiv.org/abs/2408.00610), Zhou et al., arxiv 2024

- [T-TD3: A Reinforcement Learning Framework for Stable Grasping of Deformable Objects Using Tactile Prior](https://arxiv.org/abs/2408.00610), Zhou et al., T-ASE 2024

- [Learning Task Planning from Multi-Modal Demonstration for Multi-Stage Contact-Rich Manipulation](https://arxiv.org/pdf/2409.11863), Chen et al., arxiv 2024

- [Bimanual In-hand Manipulation using Dual Limit Surfaces](https://arxiv.org/pdf/2409.14698), Dang et al., arxiv 2024

- [Extremum Seeking Controlled Wiggling for Tactile Insertion](https://arxiv.org/pdf/2410.02595), Burner et al., arxiv 2024

- [T-TD3: A Reinforcement Learning Framework for Stable Grasping of Deformable Objects Using Tactile Prior](https://ieeexplore.ieee.org/document/10636851), Zhou et al., TASE 2024

- [3D-ViTac: Learning Fine-Grained Manipulation with Visuo-Tactile Sensing](https://arxiv.org/pdf/2410.24091), Huang et al., CoRL 2024

- [Analysing the Interplay of Vision and Touch for Dexterous Insertion Tasks](https://arxiv.org/pdf/2410.23860), Lenz et al., arxiv 2024

- [TARS: Tactile Affordance in Robot Synesthesia for Dexterous Manipulation](https://ieeexplore.ieee.org/abstract/document/10766612), Wu et al., RAL 2024

- [Image-Based Tactile Deformation Simulation and Pose Estimation for Robot Skill Learning](https://www.mdpi.com/2076-3417/15/3/1099), Fu et al., Applied Sciences 2025

- [Multimodal and Force-Matched Imitation Learning With a See-Through Visuotactile Sensor](https://ieeexplore.ieee.org/document/10814647), Ablett et al., TRO 2024

- [DIH-Tele: Dexterous In-Hand Teleoperation Framework for Learning Multiobjects Manipulation With Tactile Sensing](https://ieeexplore.ieee.org/document/10898061), Huang et al., TRANSACTIONS ON MECHATRONICS 2025

- [Reactive Diffusion Policy: Slow-Fast Visual-Tactile Policy Learning for Contact-Rich Manipulation](https://arxiv.org/abs/2503.02881), Xue et al., arxiv 2025

- [GelFusion: Enhancing Robotic Manipulation under Visual Constraints via Visuotactile Fusion](https://arxiv.org/pdf/2505.07455), Jiang et al., arxiv 2025

- [PolyTouch: A Robust Multi-Modal Tactile Sensor for Contact-rich Manipulation Using Tactile-Diffusion Policies](https://arxiv.org/abs/2504.19341), Zhao et al., ICRA 2025

- [FreeTacMan: Robot-free Visuo-Tactile Data Collection System for Contact-rich Manipulation](https://arxiv.org/pdf/2506.01941), Wu et al., arxiv 2025

- [TactileAloha: Learning Bimanual Manipulation with Tactile Sensing](https://ieeexplore.ieee.org/document/11063285), Gu et al., RAL 2025



### Classification/Recognition
- [Majority Voting: Material Classification by Tactile Sensing Using Surface Texture](https://ieeexplore.ieee.org/abstract/document/5756488), Jamali et al., TRO 2011

- [Sensing and recognizing surface textures using a gelsight sensor](https://www.cv-foundation.org/openaccess/content_cvpr_2013/html/Li_Sensing_and_Recognizing_2013_CVPR_paper.html), Li et al., CVPR 2013
  
- [Continuous material identification through tactile sensing](https://ieeexplore.ieee.org/abstract/document/7727852), Eguíluz et al., IJCNN 2016
  
- [A multi-modal approach to continuous material identification through tactile sensing](https://ieeexplore.ieee.org/abstract/document/7759721), Eguíluz et al., IROS 2016
  
- [Multimodal Material identification through recursive tactile sensing](https://www.sciencedirect.com/science/article/pii/S0921889017308618), Eguíluz et al., RAS 2018
  
- [Connecting Look and Feel: Associating the visual and tactile properties of physical materials](https://openaccess.thecvf.com/content_cvpr_2017/html/Yuan_Connecting_Look_and_CVPR_2017_paper.html), Yuan et al., CVPR 2017

- [Shape-independent hardness estimation using deep learning and a GelSight tactile sensor](https://ieeexplore.ieee.org/abstract/document/7989116), Yuan et al., ICRA 2017

- [Vitac: Feature sharing between vision and tactile sensing for cloth texture recognition](https://ieeexplore.ieee.org/abstract/document/8460494), Yuan et al., ICRA 2018

- [Active clothing material perception using tactile sensing and deep learning](https://ieeexplore.ieee.org/abstract/document/8461164), Yuan et al., ICRA 2018

- [Understanding Dynamic Tactile Sensing for Liquid Property Estimation](https://arxiv.org/abs/2205.08771), Huang et al., arxiv 2022

- [Visuotactile Affordances for Cloth Manipulation with Local Control](https://arxiv.org/abs/2212.05108), Sunil et al., arxiv 2022

- [See, Hear, and Feel: Smart Sensory Fusion for Robotic Manipulation](https://arxiv.org/abs/2212.03858), Li et al., arxiv 2022

- [TANDEM: Learning Joint Exploration and Decision Making With Tactile Sensors](https://ieeexplore.ieee.org/document/9839393), Xu et al., RAL 2022

- [TANDEM3D: Active Tactile Exploration for 3D Object Recognition](https://arxiv.org/abs/2209.08772), Xu et al., ICRA 2023

- [Multimodal Zero-Shot Learning for Tactile Texture Recognition](https://arxiv.org/abs/2306.12705), Cao et al., arxiv 2023

- [Controllable Visual-Tactile Synthesis](https://arxiv.org/abs/2305.03051), Gao et al., arxiv 2023

- [Estimating Properties of Solid Particles Inside Container Using Touch Sensing](https://arxiv.org/pdf/2307.15646.pdf), Guo et al., arxiv 2023

- [Aerial Interaction with Tactile Sensing](https://arxiv.org/abs/2310.00142), Guo et al., arxiv 2023

- [Sim2Real Bilevel Adaptation for Object Surface Classification using Vision-Based Tactile Sensors](https://arxiv.org/abs/2311.0380), Caddeo et al., arxiv 2023

- [Dynamic Layer Detection of a Thin Silk Cloth using DenseTact Optical Tactile Sensors](https://arxiv.org/pdf/2409.09849), Chungyoun et al., arxiv 2024

- [Sim2Surf: a Sim2Real Surface Classifier for Vision-Based Tactile Sensors with a Bilevel Adaptation Pipeline](https://ieeexplore.ieee.org/abstract/document/10851808), Caddeo et al., IEEE Sensors 2025

- [RA-Touch: Retrieval-Augmented Touch Understanding with Enriched Visual Data](https://arxiv.org/pdf/2505.14270), Cho et al., ACM MM 2025


### Mapping/Localization
- [Tracking objects with point clouds from vision and touch](https://ieeexplore.ieee.org/abstract/document/7989460), Izatt et al., ICRA 2017

- [3D Shape Perception from Monocular Vision, Touch, and Shape Priors](https://ieeexplore.ieee.org/abstract/document/8593430), Wang et al., IROS 2018

- [End-to-end pixelwise surface normal estimation with convolutional neural networks and shape reconstruction using GelSight sensor](https://ieeexplore.ieee.org/abstract/document/8593430), Li et al., ROBIO 2018

- [From Pixels to Percepts: Highly Robust Edge Perception and Contour Following Using Deep Learning and an Optical Biomimetic Tactile Sensor](https://ieeexplore.ieee.org/abstract/document/8641397), Lepora et al., RAL 2019

- [Convolutional Autoencoder for Feature Extraction in Tactile Sensing](https://ieeexplore.ieee.org/abstract/document/8758942), Polic et al., RAL 2019

- [Tactile Mapping and Localization from High-Resolution Tactile Imprints](https://ieeexplore.ieee.org/abstract/document/8794298), Bauza et al., ICRA 2019

- [Fast Model-Based Contact Patch and Pose Estimation for Highly Deformable Dense-Geometry Tactile Sensors](https://ieeexplore.ieee.org/document/8936859), Kuppuswamy et al., RAL 2020

- [Deep Gated Multi-modal Learning: In-hand Object Pose Changes Estimation using Tactile and Image Data](https://ieeexplore.ieee.org/abstract/document/9341799), Anzai et al., IROS 2020

- [3D Shape Reconstruction from Vision and Touch](https://proceedings.neurips.cc/paper/2020/hash/a3842ed7b3d0fe3ac263bcabd2999790-Abstract.html), Smith et al., NeurIPS 2020

- [Tactile SLAM: Real-time inference of shape and pose from planar pushing](https://ieeexplore.ieee.org/abstract/document/9562060), Suresh et al., ICRA 2021

- [Tactile Object Pose Estimation from the First Touch with Geometric Contact Rendering](https://proceedings.mlr.press/v155/villalonga21a.html), Bauza et al., CoRL 2021

- [Active 3D Shape Reconstruction from Vision and Touch](https://proceedings.neurips.cc/paper/2021/hash/8635b5fd6bc675033fb72e8a3ccc10a0-Abstract.html), Smith et al., NeurIPS 2021

- [Active Visuo-Tactile Point Cloud Registration for Accurate Pose Estimation of Objects in an Unknown Workspace](https://arxiv.org/abs/2108.04015), Murali et al., arxiv 2021

- [Learning Tactile Models for Factor Graph-based Estimation](https://ieeexplore.ieee.org/abstract/document/9561011), Sodhi et al., ICRA 2021

- [Tac2Pose: Tactile Object Pose Estimation from the First Touch](https://arxiv.org/abs/2204.11701), Bauza et al., arxiv 2022

- [ShapeMap 3-D: Efficient shape mapping through dense touch and vision](https://ieeexplore.ieee.org/abstract/document/9812040), Suresh et al., ICRA 2022

- [PatchGraph: In-hand tactile tracking with learned surface normals](https://ieeexplore.ieee.org/abstract/document/9811953), Sodhi et al., ICRA 2022

- [MidasTouch: Monte-Carlo inference over distributions across sliding touch](https://openreview.net/forum?id=JWROnOf4w-K), Suresh et al., CoRL 2022

- [Enhancing Generalizable 6D Pose Tracking of an In-Hand Object with Tactile Sensing](https://arxiv.org/abs/2210.04026), Xu et al., arxiv 2022

- [Using Collocated Vision and Tactile Sensors for Visual Servoing and Localization](https://arxiv.org/abs/2204.11686), Chaudhury et al., arxiv 2022

- [Simultaneous Contact Location and Object Pose Estimation Using Proprioception and Tactile Feedback](https://arxiv.org/abs/2206.01245), Sipos et al., arxiv 2022

- [VisuoTactile 6D Pose Estimation of an In-Hand Object Using Vision and Tactile Sensor Data](https://ieeexplore.ieee.org/abstract/document/9682507), Dikhale et al., RAL 2022

- [In-Hand Pose Estimation Using Hand-Mounted RGB Cameras and Visuotactile Sensors](https://ieeexplore.ieee.org/stamp/stamp.jsp?tp=&arnumber=10043666), Gao et al., IEEE 2023

- [Tac2Structure: Object Surface Reconstruction Only Through Multi Times Touch](https://ieeexplore.ieee.org/stamp/stamp.jsp?tp=&arnumber=10021601), Lu et al., RAL 2023

- [Tac-VGNN: A Voronoi Graph Neural Network for Pose-Based Tactile Servoing](https://arxiv.org/abs/2303.02708), Fan et al., arxiv 2023

- [FingerSLAM: Closed-loop Unknown Object Localization and Reconstruction from Visuo-tactile Feedback](https://arxiv.org/abs/2303.07997), Zhao et al., arxiv 2023

- [TactoFind: A Tactile Only System for Object Retrieval](https://arxiv.org/abs/2303.13482), Pai et al., arxiv 2023

- [Touch if it's transparent! ACTOR: Active Tactile-based Category-Level Transparent Object Reconstruction](https://arxiv.org/abs/2307.16254), Murali et al., arxiv 2023

- [ViHOPE: Visuotactile In-Hand Object 6D Pose Estimation with Shape Completion](https://ieeexplore.ieee.org/abstract/document/10246361), Li et al., RAL 2023

- [Sliding Touch-based Exploration for Modeling Unknown Object Shape with Multi-fingered Hands](https://arxiv.org/pdf/2308.00576.pdf), Chen et al., IROS 2023

- [Collision-aware In-hand 6D Object Pose Estimation using Multiple Vision-based Tactile Sensors](https://ieeexplore.ieee.org/document/10160359), Caddeo et al., ICRA 2023

- [Tactile-Filter: Interactive Tactile Perception for Part Mating](https://arxiv.org/abs/2303.06034), Ota et al., RSS 2023

- [Enhanced Information Extraction from Cylindrical Visual-Tactile Sensors via Image Fusion](https://arxiv.org/abs/2311.04002), Li et al., arxiv 2023

- [TouchSDF: A DeepSDF Approach for 3D Shape Reconstruction using Vision-Based Tactile Sensing](https://arxiv.org/abs/2311.12602), Comi et al., arxiv 2023

- [Grasping, Part Identification, and Pose Refinement in One Shot with a Tactile Gripper](https://arxiv.org/abs/2312.17650), Lim et al., arxiv 2023

- [Measuring Object Rotation via Visuo-Tactile Segmentation of Grasping Region](https://ieeexplore.ieee.org/abstract/document/10149493), Castano-Amoros et al., RAL 2023

- [TransTouch: Learning Transparent Objects Depth Sensing Through Sparse Touches](https://ieeexplore.ieee.org/abstract/document/10341417), Bian et al., IROS 2023

- [Snap-it, Tap-it, Splat-it: Tactile-Informed 3D Gaussian Splatting for Reconstructing Challenging Surfaces](https://arxiv.org/pdf/2403.20275), Comi et al., arxiv 2024

- [Tactile-Augmented Radiance Fields](https://arxiv.org/abs/2405.04534), Dou et al., CVPR 2024

- [Touch-GS: Visual-Tactile Supervised 3D Gaussian Splatting](https://arxiv.org/pdf/2403.09875), Swann et al., arxiv 2024

- [HyperTaxel: Hyper-Resolution for Taxel-Based Tactile Signals Through Contrastive Learning](https://arxiv.org/pdf/2408.08312), Li et al., arxiv 2024

- [NormalFlow: Fast, Robust, and Accurate Contact-based Object 6DoF Pose Tracking with Vision-based Tactile Sensors](https://ieeexplore.ieee.org/abstract/document/10766628), Huang et al., RAL 2024


### Extrinsic Contact Sensing
- [Extrinsic Contact Sensing with Relative-Motion Tracking from Distributed Tactile Measurements](https://ieeexplore.ieee.org/abstract/document/9561781), Ma et al., ICRA 2021

- [Simultaneous Tactile Estimation and Control of Extrinsic Contact](https://arxiv.org/abs/2303.03385), Kim et al., ICRA 2023

- [Neural Contact Fields: Tracking Extrinsic Contact with Tactile Sensing](http://arxiv.org/abs/2210.09297), Higuera et al., ICRA 2023

- [Perceiving Extrinsic Contacts from Touch Improves Learning Insertion Policies](https://arxiv.org/abs/2309.16652), Higuera et al., arxiv 2023

- [Simultaneous Tactile Estimation and Control for Extrinsic Dexterity](https://arxiv.org/abs/2401.10230), Bronars et al., arxiv 2023

- [TEXterity: Tactile Extrinsic deXterity](https://arxiv.org/abs/2401.10230), Bronars et al., arxiv 2024

- [Visual-auditory Extrinsic Contact Estimation](https://arxiv.org/pdf/2409.14608), Yi et al., arxiv 2024

- [ViTaSCOPE: Visuo-tactile Implicit Representation for In-hand Pose and Extrinsic Contact Estimation](https://arxiv.org/pdf/2506.12239), Lee et al., RSS 2025


### Image Generation
- [Deep Tactile Experience: Estimating Tactile Sensor Output from Depth Sensor Data](https://ieeexplore.ieee.org/abstract/document/9341596), Patel et al., IROS 2020

- [Touching a NeRF: Leveraging Neural Radiance Fields for Tactile Sensory Data Generation](https://openreview.net/pdf?id=No3mbanRlZJ), Zhong et al., CoRL 2022

- [Vis2Hap: Vision-based Haptic Rendering by Cross-modal Generation](https://arxiv.org/abs/2301.06826.pdf), Cao et al., ICRA 2023

- [Learning to Read Braille: Bridging the Tactile Reality Gap with Diffusion Models](https://arxiv.org/abs/2304.01182.pdf), Higuera et al., ICRA 2023

- [Generating Visual Scenes from Touch](https://openaccess.thecvf.com/content/ICCV2023/html/Yang_Generating_Visual_Scenes_from_Touch_ICCV_2023_paper.html), Yang et al., ICCV 2023

- [Touch2Touch: Cross-Modal Tactile Generation for Object Manipulation](https://arxiv.org/pdf/2409.08269), Rodriguez et al., arxiv 2024

- [Tactile DreamFusion: Exploiting Tactile Sensing for 3D Generation](https://openreview.net/pdf?id=fA3RMMl8ii), Gao et al., NeurIPS 2024

- [CONTROLTAC: Force- and Position-Controlled Tactile Data Augmentation with a Single Reference Image](https://arxiv.org/pdf/2505.20498), Luo et al., arxiv 2025


### Representation Learning
- [Touch and Go: Learning from Human-Collected Vision and Touch](https://openreview.net/forum?id=ZZ3FeSSPPblo), Yang et al., NeurIPS 2022

- [Dexterity from Touch: Self-Supervised Pre-Training of Tactile Representations with Robotic Play](https://arxiv.org/abs/2303.12076), Guzey et al., arxiv 2023

- [Investigating Vision Foundational Models for Tactile Representation Learning](https://arxiv.org/abs/2305.00596), Zandonati et al., arxiv 2023

- [Binding Touch to Everything: Learning Unified Multimodal Tactile Representations](https://arxiv.org/abs/2401.18084), Yang et al., CVPR 2024

- [Multimodal Visual-Tactile Representation Learning through Self-Supervised Contrastive Pre-Training](https://arxiv.org/abs/2401.12024), Dave et al., arxiv 2024

- [Touch100k: A Large-Scale Touch-Language-Vision Dataset for Touch-Centric Multimodal Representation](https://arxiv.org/pdf/2406.03813), Cheng et al., arxiv 2024

- [Marker or Markerless? Mode-Switchable Optical Tactile Sensing for Diverse Robot Tasks](https://arxiv.org/pdf/2408.08276), Ou et al., arxiv 2024

- [Tactile Functasets: Neural Implicit Representations of Tactile Datasets](https://arxiv.org/pdf/2409.14592), Li et al., arxiv 2024

- [Contrastive Touch-to-Touch Pretraining](https://arxiv.org/pdf/2410.11834), Rodriguez et al., arxiv 2024

- [T3: Transferable Tactile Transformers](https://arxiv.org/abs/2406.13640), Zhao et al., arxiv 2024

- [UniT: Unified Tactile Representation for Robot Learning](https://arxiv.org/pdf/2408.06481), Xu et al., arxiv 2024

- [Sparsh: Self-supervised touch representations for vision-based tactile sensing](https://arxiv.org/pdf/2410.24090), Higuera et al., arxiv 2024

- [Touch-to-Touch Translation - Learning the Mapping Between Heterogeneous Tactile Sensing Technologies](https://arxiv.org/pdf/2411.02187), Grella et al., arxiv 2024

- [Reducing Cross-Sensor Domain Gaps in Tactile Sensing via Few-Sample-Driven Style-to-Content Unsupervised Domain Adaptation](https://www.mdpi.com/1424-8220/25/1/2567), Jing et al., MDPI Sensors 2025

- [Canonical Representation and Force-Based Pretraining of 3D Tactile for Dexterous Visuo-Tactile Policy Learning](https://arxiv.org/pdf/2409.17549), Wu et al., arxiv 2024

- [AnyTouch: Learning Unified Static-Dynamic Representation across Multiple Visuo-tactile Sensors](https://arxiv.org/abs/2502.12191), Feng et al., ICLR 2025

- [UniTac-NV: A Unified Tactile Representation For Non-Vision-Based Tactile Sensors](https://arxiv.org/pdf/2506.19699), Hou et al., arxiv 2025

- [ConViTac: Aligning Visual-Tactile Fusion with Contrastive Representations](https://arxiv.org/pdf/2506.20757), Wu et al., arxiv 2025


### Force Estimation
- [Dense Tactile Force Estimation using GelSlim and inverse FEM](https://ieeexplore.ieee.org/abstract/document/8794113), Ma et al., ICRA 2019

- [Sensing Shear Forces During Food Manipulation: Resolving the Trade-Off Between Range and Sensitivity](https://ieeexplore.ieee.org/document/8794350), Song et al., ICRA 2019

- [3D Force and Contact Estimation for a Soft-Bubble Visuotactile Sensor Using FEM](https://arxiv.org/abs/2310.11372), Peng et al., arxiv 2023

- [A Predictive Model for Tactile Force Estimation using Audio-Tactile Data](https://ieeexplore.ieee.org/abstract/document/10347357), Niederhauser et al., RAL 2023

- [Deep Domain Adaptation Regression for Force Calibration of Optical Tactile Sensors](https://arxiv.org/pdf/2407.14380), Chen et al., arxiv 2024

- [FeelAnyForce: Estimating Contact Force Feedback from Tactile Sensation for Vision-Based Tactile Sensors](https://arxiv.org/pdf/2410.02048), Shahidzadeh et al., arxiv 2024

- [TransForce: Transferable Force Prediction for Vision-based Tactile Sensors with Sequential Image Translation](https://arxiv.org/pdf/2409.09870), Chen et al., arxiv 2024

- [Grasping Force Estimation for Markerless Visuotactile Sensors](https://arxiv.org/pdf/2410.22825), Amoros et al., arxiv 2024

- [Interaction force estimation for tactile sensor arrays: Toward tactile-based interaction control for robotic fingers](https://arxiv.org/pdf/2411.13335), Chelly et al., arxiv 2024

- [iFEM2.0: Dense 3D Contact Force Field Reconstruction and Assessment for Vision-Based Tactile Sensors](https://ieeexplore.ieee.org/abstract/document/10758225), Zhao et al., TRO 2024

- [TensorTouch: Calibration of Tactile Sensors for High Resolution Stress Tensor and Deformation for Dexterous Manipulation](https://arxiv.org/pdf/2506.08291), Do et al., arxiv 2025

### LLM/VLM
- [A Touch, Vision, and Language Dataset for Multimodal Alignment](https://arxiv.org/abs/2402.13232), Fu et al., arxiv 2024

- [Binding Touch to Everything: Learning Unified Multimodal Tactile Representations](https://arxiv.org/abs/2401.18084), Yang et al., CVPR 2024

- [Octopi: Object Property Reasoning with Large Tactile-Language Models](https://arxiv.org/pdf/2405.02794), Yu et al., RSS 2024

- [Touch100k: A Large-Scale Touch-Language-Vision Dataset for Touch-Centric Multimodal Representation](https://arxiv.org/pdf/2406.03813), Cheng et al., arxiv 2024

- [CLTP: Contrastive Language-Tactile Pre-training for 3D Contact Geometry Understanding](https://arxiv.org/pdf/2505.08194), Ma et al., arxiv 2025

- [Demonstrating the Octopi-1.5 Visual-Tactile-Language Model](https://arxiv.org/pdf/2507.09985), Yu et al., RSS 2025

- [Tactile-VLA: Unlocking Vision-Language-Action Model's Physical Knowledge for Tactile Generalization](https://arxiv.org/pdf/2507.09160), Huange et al., arxiv 2025

- [Universal Visuo-Tactile Video Understanding for Embodied Interaction](https://arxiv.org/pdf/2505.22566), Xie et al., arxiv 2025


### Dexterous Hand Manipulation
- [All the Feels: A dexterous hand with large-area tactile sensing](https://arxiv.org/pdf/2210.15658), Bhirangi et al., arxiv 2022

- [Learning Purely Tactile In-Hand Manipulation with a Torque-Controlled Hand](https://arxiv.org/abs/2204.03698), Sievers et al., ICRA 2022
  
- [Sampling-based Exploration for Reinment Learning of Dexterous Manipulation](https://arxiv.org/abs/2303.03486), Khandate et al., arxiv 2023

- [Rotating without Seeing: Towards In-hand Dexterity through Touch](https://arxiv.org/abs/2303.10880), Yin et al., arxiv 2023

- [Dexterity from Touch: Self-Supervised Pre-Training of Tactile Representations with Robotic Play](https://arxiv.org/abs/2303.12076), Guzey et al., arxiv 2023
  
- [See to Touch: Learning Tactile Dexterity through Visual Incentives](https://arxiv.org/abs/2309.12300), Guzey et al., arxiv 2023

- [TacGNN: Learning Tactile-based In-hand Manipulation with a Blind Robot using Hierarchical Graph Neural Network](https://arxiv.org/pdf/2304.00736.pdf), Yang et al., arxiv 2023

- [General In-Hand Object Rotation with Vision and Touch](https://arxiv.org/abs/2309.09979), Qi et al., arxiv 2023

- [Dextrous Tactile In-Hand Manipulation Using a Modular Reinment Learning Architecture](https://arxiv.org/abs/2303.04705), Pitz et al., ICRA 2023

- [Estimator-Coupled Reinforcement Learning for Robust Purely Tactile In-Hand Manipulation](https://arxiv.org/abs/2311.04060), Röstel et al., Humanoids 2023

- [Tactile SoftHand-A: 3D-Printed, Tactile, Highly-underactuated, Anthropomorphic Robot Hand with an Antagonistic Tendon Mechanism](https://arxiv.org/pdf/2406.12731), Li et al., arxiv 2024

- [Learning a Shape-Conditioned Agent for Purely Tactile In-Hand Manipulation of Various Objects](https://arxiv.org/abs/2407.18834), Pitz et al., IROS 2024

- [Learning Time-Optimal and Speed-Adjustable Tactile In-Hand Manipulation](http://arxiv.org/abs/2411.13148), Pitz et al., Humanoids 2024

- [Visuotactile-Based Learning for Insertion with Compliant Hands](https://arxiv.org/pdf/2411.06408), Azulay et al., arxiv 2024

- [PP-Tac: Paper Picking Using Tactile Feedback in Dexterous Robotic Hands](https://arxiv.org/abs/2504.16649), Lin et al., RSS 2025



### Others
- [Exploiting Distributed Tactile Sensors to Drive a Robot Arm Through Obstacles](https://ieeexplore.ieee.org/abstract/document/9384158), Albini et al., RAL 2021

- [Extended Tactile Perception: Vibration Sensing through Tools and Grasped Objects](https://ieeexplore.ieee.org/abstract/document/9636677), Taunyazov et al., IROS 2021

- [MidasTouch: Monte-Carlo inference over distributions across sliding touch](https://openreview.net/forum?id=JWROnOf4w-K), Suresh et al., CoRL 2022

- [SLURP! Spectroscopy of Liquids Using Robot Pre-Touch Sensing](https://arxiv.org/abs/2210.04941), Hanson et al., arxiv 2022

- [Learning to Synthesize Volumetric Meshes from Vision-based Tactile Imprints](https://arxiv.org/abs/2203.15155v1), Zhu et al., arxiv 2022

- [Going In Blind: Object Motion Classification using Distributed Tactile Sensing for Safe Reaching in Clutter](https://arxiv.org/abs/2210.00137), Thomasson et al., arxiv 2022

- [Development and Evaluation of a Learning-based Model for Real-time Haptic Texture Rendering](https://arxiv.org/abs/2212.13332), Heravi et al., arxiv 2022

- [In-situ Mechanical Calibration for Vision-based Tactile Sensors](https://ieeexplore.ieee.org/document/10161153), Zhao et al., ICRA 2023

- [Low-Cost Teleoperation with Haptic Feedback through Vision-based Tactile Sensors for Rigid and Soft Object Manipulation](https://arxiv.org/pdf/2403.16764), Lippi et al., arxiv 2024

- [Real-Time Reconstruction of 3-D Tactile Motion Field via Multitask Learning](https://ieeexplore.ieee.org/document/10522992), Liu et al., Transactions on Instrumentation and Measurement 2024

- [Tactile Elastography](https://ieeexplore.ieee.org/stamp/stamp.jsp?arnumber=11027485), Xiang et al., TRO 2025

- [Active Perception for Tactile Sensing: A Task-Agnostic Attention-Based Approach](https://arxiv.org/pdf/2505.06182), Schneider et al., arxiv 2025

- [Tactile MNIST: Benchmarking Active Tactile Perception](https://arxiv.org/pdf/2506.06361), Schneider et al., arxiv 2025

- [SuperMag: Vision-based Tactile Data Guided High-resolution Tactile Shape Reconstruction for Magnetic Tactile Sensors](https://arxiv.org/pdf/2507.20002), Hou et al., arxiv 2025



## Software

### Simulator
- [Generation of GelSight Tactile Images for Sim2Real Learning](https://ieeexplore.ieee.org/abstract/document/9369877), Gomes et al., RAL 2021

- [Simulation of Vision-based Tactile Sensors using Physics based Rendering](https://ieeexplore.ieee.org/document/9561122), Agarwal et al., ICRA 2021

- [Sim-to-Real for Robotic Tactile Sensing via Physics-Based Simulation and Learned Latent Projections](https://ieeexplore.ieee.org/abstract/document/9561969), Narang et al., ICRA 2021

- [Tactile Sim-to-Real Policy Transfer via Real-to-Sim Image Translation](https://openreview.net/forum?id=2NcPgLa7yqD), Church et al., CoRL 2021

- [Tactile Gym 2.0: Sim-to-Real Deep Reinforcement Learning for Comparing Low-Cost High-Resolution Robot Touch](https://ieeexplore.ieee.org/abstract/document/9847020), Lin et al., RAL 2022

- [TACTO: A Fast, Flexible, and Open-Source Simulator for High-Resolution Vision-Based Tactile Sensors](https://ieeexplore.ieee.org/abstract/document/9697425), Wang et al., RAL 2022

- [Taxim: An Example-Based Simulation Model for GelSight Tactile Sensors](https://ieeexplore.ieee.org/abstract/document/9681378), Si et al., RAL 2022

- [Bidirectional Sim-to-Real Transfer for GelSight Tactile Sensors With CycleGAN](https://ieeexplore.ieee.org/abstract/document/9756938), Chen et al., RAL 2022

- [Learning the Dynamics of Compliant Tool-Environment Interaction for Visuo-Tactile Contact Servoing](https://arxiv.org/abs/2210.03836), Merwe et al., arxiv 2022

- [Efficient Tactile Simulation with Differentiability for Robotic Manipulation](https://openreview.net/forum?id=6BIffCl6gsM), Xu et al., CoRL 2022

- [Tacchi: A Pluggable and Low Computational Cost Elastomer Deformation Simulator for Optical Tactile Sensors](https://ieeexplore.ieee.org/abstract/document/10017344), Chen et al., RAL 2023

- [Unsupervised Adversarial Domain Adaptation for Sim-to-Real Transfer of Tactile Images](https://ieeexplore.ieee.org/abstract/document/10106009), Jing et al., Transactions on Instrumentation and Measurement 2023

- [Beyond Flat GelSight Sensors: Simulation of Optical Tactile Sensors of Complex Morphologies for Sim2Real Learning](https://arxiv.org/pdf/2305.12605.pdf), Gomes et al., RSS 2023

- [Marker-Embedded Tactile Image Generation via Generative Adversarial Networks](https://ieeexplore.ieee.org/abstract/document/10146407), Kim et al., RAL 2023

- [Augmenting Tactile Simulators with Real-like and Zero-Shot Capabilities](https://arxiv.org/abs/2309.10409), Azulay et al., RAL 2023

- [Tactile Imprint Simulation of GelStereo Visuotactile Sensors](https://ieeexplore.ieee.org/abstract/document/10216245), Cui et al., ICMA 2023

- [TacIPC: Intersection- and Inversion-free FEM-based Elastomer Simulation For Optical Tactile Sensors](https://arxiv.org/abs/2311.05843), Du et al., arxiv 2023

- [General-Purpose Sim2Real Protocol for Learning Contact-Rich Manipulation With Marker-Based Visuotactile Sensors](https://ieeexplore.ieee.org/document/10388459/), Chen et al., TRO 2024

- [FOTS: A Fast Optical Tactile Simulator for Sim2Real Learning of Tactile-motor Robot Manipulation Skills](https://arxiv.org/pdf/2404.19217), Zhao et al., arxiv 2024

- [Simulation of Optical Tactile Sensors Supporting Slip and Rotation using Path Tracing and IMPM](https://arxiv.org/pdf/2405.02914), Shen et al., arxiv 2024

- [Optimizing BioTac Simulation for Realistic Tactile Perception](https://arxiv.org/abs/2404.10425), Zai El Amri and Navarro-Guerrero, IJCNN 2024

- [DIFFTACTILE: A Physics-based Differentiable Tactile Simulator for Contact-rich Robotic Manipulation](https://arxiv.org/abs/2403.08716), Si et al., ICLR 2024

- [TacEx: GelSight Tactile Simulation in Isaac Sim – Combining Soft-Body and Visuotactile Simulators](https://arxiv.org/pdf/2411.04776), Nguyen et al., CoRL 2024

- [Zero-Shot Sim2Real Measurement for Neuromorphic Vision-Based Tactile Sensors](https://ieeexplore.ieee.org/stamp/stamp.jsp?arnumber=10680346&tag=1), Salah et al., Transactions on Instrumentation and Measurement 2024

- [Image-Based Tactile Deformation Simulation and Pose Estimation for Robot Skill Learning](https://www.mdpi.com/2076-3417/15/3/1099), Fu et al., Apply Sciences 2025

- [TacFlex: Multi-Mode Tactile Imprints Simulation for Visuotactile Sensors with Coating Patterns](https://ieeexplore.ieee.org/stamp/stamp.jsp?arnumber=11024236), Zhang et al., TRO 2025


### Library
- [PyTouch: A Machine Learning Library for Touch Processing](https://ieeexplore.ieee.org/abstract/document/9561084), Lambeta et al., ICRA 2021

- [TacSL: A Library for Visuotactile Sensor Simulation and Learning](https://arxiv.org/pdf/2408.06506), Akinola et al., arxiv 2024


## Review
- [Artificial Sense of Slip—A Review](https://ieeexplore.ieee.org/document/6479676), Francomano et al., IEEE Sensors 2013

- [Tactile sensing in dexterous robot hands — Review](https://www.sciencedirect.com/science/article/pii/S0921889015001621), Kappassov et al., Robotics and Autonomous Systems 2015

- [Tactile Image Sensors Employing Camera: A Review](https://www.mdpi.com/1424-8220/19/18/3933), Shimonomura et al., MDPI Sensors 2019

- [Tactile Sensors for Advanced Intelligent Systems](https://onlinelibrary.wiley.com/doi/full/10.1002/aisy.201900090), Wang et al., Advanced Intelligent Systems 2019

- [Visuotactile Sensors With Emphasis on GelSight Sensor: A Review](https://ieeexplore.ieee.org/document/9028163), C. Abad et al., IEEE Sensors 2020

- [On the Design and Development of Vision-based Tactile Sensors](https://link.springer.com/article/10.1007/s10846-021-01431-0), Shah et al., JINT 2021

- [A survey of visuotactile sensing technologies for robotic manipulation](http://www.infocomm-journal.com/znkx/CN/10.11959/j.issn.2096-6652.202222), Cui et al., Chinese Journal of Intelligent Science and Technology 2022

- [Hardware Technology of Vision-Based Tactile Sensor: A Review](https://ieeexplore.ieee.org/abstract/document/9911183), Zhang et al., IEEE Sensors 2022

-[Marker Displacement MethodUsedinVision-Based Tactile Sensors—From 2D to 3D: A Review](https://www.techrxiv.org/articles/preprint/Marker_Displacement_Method_Used_in_Vision-Based_Tactile_Sensors_From_2D_to_3D_A_Review/22122596), LI et al., IEEE Sensors 2023

- [When Vision Meets Touch: A Contemporary Review for Visuotactile Sensors from the Signal Processing Perspective](https://arxiv.org/pdf/2406.12226), Li et al., arxiv 2024

- [Artificial Skin Based on Visuo-Tactile Sensing for 3D Shape Reconstruction: Material, Method, and Evaluation](https://onlinelibrary.wiley.com/doi/full/10.1002/adfm.202411686), Zhang et al., Advanced Functional Materials 2024

- [Tactile Data Generation and Applications Based on Visuo-tactile Sensors: A Review](https://www.sciencedirect.com/science/article/pii/S1566253525002350), Sun et al., Information Fusion 2025


## Thesis
### Master
- [Tactile Measurement with a GelSight Sensor](http://dspace.mit.edu/handle/1721.1/93815), Wenzhen Yuan, Master, 2014
- [Robust object pose estimation with point clouds from vision and touch](http://dspace.mit.edu/handle/1721.1/111867), Gregory Russell, Master, 2017
- [3D shape perception from vision and touch](http://dspace.mit.edu/handle/1721.1/122914), Shaoxiong Wang, Master, 2019
- [Vision-based proprioception of a soft robotic finger with tactile sensing](http://dspace.mit.edu/handle/1721.1/127131), Sandra Q. Liu, Master, 2020
- [Discovering the patterns of human-environment interactions using scalable functional textiles](http://dspace.mit.edu/handle/1721.1/128628), Yiyue Luo, Master, 2020
- [Deformable Object Manipulation with a Tactile Reactive Gripper](http://dspace.mit.edu/handle/1721.1/139946), Neha Sunil, Master, 2021

### PhD
- [Touching is believing : sensing and analyzing touch information with GelSight](http://dspace.mit.edu/handle/1721.1/99834), Rui Li, Ph.D., 2015
- [High-resolution tactile sensing for robotic perception](http://dspace.mit.edu/handle/1721.1/120267), Wenzhen Yuan, Ph.D., 2018
- [Continuous tactile sensing for enhanced human-robot collaboration](https://scholar.google.com/citations?view_op=view_citation&hl=en&user=1PbAJlEAAAAJ&cstart=20&pagesize=80&sortby=pubdate&citation_for_view=1PbAJlEAAAAJ:qUcmZB5y_30C), Augusto Gomez Eguiluz, Ph.D., 2018
- [Reactive manipulation with contact models and tactile feedback](http://dspace.mit.edu/handle/1721.1/125476), Francois R. Hogan, Ph.D., 2020
- [Data-driven Tactile Sensing using Spatially Overlapping Signals](https://www.proquest.com/openview/2fe76b59ca5836dc691847d611775430/1?pq-origsite=gscholar&cbl=18750&diss=y), Pedro Piacenza, Ph.D., 2020
- [High-resolution Tactile Sensing for Reactive Robotic Manipulation](http://dspace.mit.edu/handle/1721.1/130764), Siyuan Dong, Ph.D., 2021
- [A general framework for high-resolution robotic tactile sensing: design, simulation, and learning](https://www.research-collection.ethz.ch/handle/20.500.11850/541127), Carmelo Sferrazza, Ph.D., 2022
- [Interactive Touch for Manipulation](https://dspace.mit.edu/handle/1721.1/147267), Shaoxiong Wang, Ph.D., 2022


## Products
- [DIGIT](https://www.gelsight.com/product/digit-tactile-sensor/)
- [GelSight Mini](https://www.gelsight.com/product/gelsight-mini-system/)
- [FingerVision](https://www.fingervision.jp/en/service-product)
- [BioTac](https://syntouchinc.com/robotics/)
- [uSkin](https://www.xelarobotics.com/tactile-sensors)
- [Paxini](https://paxini.com/product/sensorax)

## Open-Source
### Sensor
- [9DTact](https://github.com/linchangyi1/9DTact)
- [DTact](https://github.com/linchangyi1/DTact)
- [GelSlim 3.0](https://github.com/mcubelab/gelslim)
- [GelSlim 4.0](https://www.mmintlab.com/research/gelslim-4-0/)
- [DIGIT](https://github.com/facebookresearch/digit-design)
- [FingerVision](https://github.com/akihikoy/fingervision)
- [OmniTact](https://github.com/s-tian/bench-press)
- [GelSight_1](https://github.com/FrozenPenguinn/GelSight_Sensor)
- [GelSight_2](https://github.com/leo9344/Implementation-of-GelSight)
- [GelSight_3](https://github.com/geiman-uw/fingergelsight)
- [FingerGelSight](https://github.com/geiman-uw/fingergelsight)
- [DigiTac](https://github.com/nlepora/digitac-design)
- [TouchRoller](https://github.com/3PTelephant/TouchRoller)
- [ReSkin](https://github.com/raunaqbhirangi/reskin_sensor)
- [Insight](https://github.com/Huanbo-Sun/Haptics-for-Robots-Insight)

### Dexterous Hand with Tactile Sensing
- [All the Feels: A dexterous hand with large-area tactile sensing](https://sites.google.com/view/dmanus/home)
- [Tactile SoftHand-A](https://arxiv.org/pdf/2406.12731)
  
### Sensor Support
- [DIGIT_Depth](https://github.com/vocdex/digit-depth)
- [DIGIT_Interface](https://github.com/facebookresearch/digit-interface)
- [DIGIT_Simulator](https://github.com/hsp-iit/gazebo-yarp-digit-plugin)
- [GelSight-mini_SDK](https://github.com/gelsightinc/gsrobotics)
- [GelSight-mini_Interface](https://github.com/duyipai/gsmini)
- [GelSight_Driver](https://github.com/gizatt/gelsight_driver)
- [GelSight_ROS](https://github.com/hmccarty/gelsight-ros)
- [GelSight_Conversion](https://github.com/gelsightinc/tactiledemo)
- [GelSight_Heightmap](https://github.com/siyuandong16/gelsight_heightmap_reconstruction)
- [GelSight_Tracking_1](https://github.com/GelSight/tracking)
- [GelSight_Tracking_2](https://github.com/personalrobotics/gelslight_tracking)
- [GelSight_Neural_Tracking](https://github.com/wx405557858/neural_tracking)
- [GelSlim_Heightmap](https://github.com/siyuandong16/Heightmap_reconstruction_with_GelSlim)
- [Gelsight_Controller](https://github.com/Photon26/Gelsight_controller)

### Simulator/Library
- [Tactile Optical Simulation](https://github.com/CMURoboTouch/tactile_optical_simulation)
- [GelSight_Simulation](https://github.com/danfergo/gelsight_simulation)
- [BioTac Simulation](https://github.com/NVlabs/biotac_sim)
- [TACTO](https://github.com/facebookresearch/tacto)
- [Taxim](https://github.com/CMURoboTouch/Taxim)
- [GelSight-Sim2Real](https://github.com/RVSATHU/GelSight-Sim2Real)
- [DIGIT-Mujoco](https://github.com/L3S/TACTO-MuJoCo)
- [DIGIT-Gazebo](https://github.com/hsp-iit/gazebo-yarp-digit-plugin)
- [PyTouch](https://github.com/facebookresearch/PyTouch)
- [PyTact](https://github.com/hmccarty/pytact)
- [Tacchi](https://github.com/zixichen007115/Tacchi)
- [BioTac](https://github.com/wzaielamri/optimizing_biotac_simulation)
- [M3L](https://github.com/carlosferrazza/tactile_envs)
- [AllSight](https://github.com/osheraz/allsight_sim)
  
### Dataset
- [Visual-Tactile_Dataset](https://github.com/tsinghua-rll/Visual-Tactile_Dataset)
- [YCB-Sight](https://github.com/CMURoboTouch/YCB-Sight)
- [DenseTact](https://github.com/armlabstanford/DenseTact)
- [Touch and Go](https://github.com/fredfyyang/Tactile-Driven-Image-Stylization/)
- [ObjectFolder](https://ai.stanford.edu/~rhgao/objectfolder/)
- [ObjectFolder 2.0](https://ai.stanford.edu/~rhgao/objectfolder2.0/)
- [ObjectFolder 3.0](https://www.objectfolder.org/)
- [TVL](https://tactile-vlm.github.io/)
- [Touch100K](https://cocacola-lab.github.io/Touch100k/)

### Algorithms
- [ShapeMap 3-D](https://github.com/rpl-cmu/shape-map-3D)
- [Tactile SLAM](https://github.com/suddhu/gpis-touch-public)
- [pybullet-shape-contact](https://github.com/suddhu/pybullet-shape-contact)
- [PatchGraph](https://github.com/psodhi/tactile-in-hand)
- [TANDEM](https://github.com/jingxixu/tandem-public)
- [Neural Contact Fields (NCF)](https://github.com/carolinahiguera/NCF)
- [Active Extrinsic Contact Sensing](https://github.com/sangwkim/active_extrinsic_contact)
- [MidasTouch](https://github.com/facebookresearch/MidasTouch)
- [Tactile-Diffusion](https://github.com/carolinahiguera/Tactile-Diffusion)
- [Tac-Man-Simulation](https://github.com/YuyangLee/Tac-Man-Simulation)

## Laboratory
- [MIT - Ted Adelson](https://www.csail.mit.edu/person/ted-adelson)
- [MIT - Alberto Rodriguez - Mcube Lab](https://mcube.mit.edu/)
- [Meta - Mustafa Mukadam - Manipulation and Tactile Sensing Group](https://www.mustafamukadam.com/)
- [UIUC - Wenzhen Yuan - RoboTouch Lab](https://robotouchlab.web.illinois.edu/)
- [SJTU - Daolin Ma - MPI Lab](https://mpi.sjtu.edu.cn/index.html)
- [KCL - Shan LUo](https://shanluo.github.io/)
- [Bristol - Nathan F. Lepora](https://lepora.com/)
- [TU Dresden - Roberto Calandra - LASR Lab](https://lasr.org/)
- [Tsinghua - Huazhe Xu](http://hxu.rocks/)
- [Tsinghua - Bin Fang](https://scholar.google.com/citations?hl=zh-CN&user=5G47IcIAAAAJ&view_op=list_works&sortby=pubdate)
- [Tsinghua - Fuchun Sun](https://scholar.google.com/citations?hl=en&user=DbviELoAAAAJ&view_op=list_works&sortby=pubdate)
- [Tsinghua - Wenbo Ding - SSR Group](http://ssr-group.net/)
- [Tsinghua - Yao Jiang](https://ieeexplore.ieee.org/author/37086023995)
- [Tsinghua - Rui Chen](https://callmeray.github.io/homepage/Home.html)
- [Max Planck Institute - Katherine J. Kuchenbecker](https://hi.is.mpg.de/)
- [UMich - Nima Fazeli - Mmint Lab](https://www.mmintlab.com/)
- [Purdue - Yu She - MARS Lab](https://www.purduemars.com/)
- [Stanford - Monroe Kennedy III - ARMLab](https://arm.stanford.edu/)
- [UVA - Gregory J. Gerling - Gerling Touch Lab](https://www.gerlingtouchlab.com/)
- [Oxford - Perla Maiolino - Soft Robotics Lab](https://www.ori.ox.ac.uk/labs/srl/)
- [Peking University - Huanbo Sun - Haptic Sensing Lab](https://hapticsensinglab.com/)
- [QMUL - Kaspar Althoefer](https://www.sems.qmul.ac.uk/staff/k.althoefer)
- [KCL - Hongbin Liu - HaMMeR Lab](https://kclhammerlab.com/)

