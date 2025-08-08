// Modern Resume JavaScript - Enhanced & Interactive with Language Toggle
document.addEventListener('DOMContentLoaded', function () {
  // Initialize all features
  initAvatarUpload();
  initSkillAnimations();
  initScrollAnimations();
  initContactButton();
  initFloatingElements();
  initLanguageToggle();
  
  // Language data
  const languageData = {
    zh: {
      name: '曹学伟',
      title: ' ',
      contact: {
        university: '中国科学技术大学',
        email: 'caoxuewei@mail.ustc.edu.cn',
        info: '男 | 2000.03'
      },
      about: {
        title: '关于我',
        content: '我是一名专注<strong>人工智能及其应用</strong>的博士生，就读于<strong>中国科学技术大学</strong>，所学专业是<strong>智能科学与技术</strong>。我热衷于技术创新，期望在人工智能领域继续深入研究，创造更多价值。'
      },
      education: {
        title: '教育背景',
        items: [
          {
            period: '2025.09 - 2029.06',
            degree: '智能科学与技术 | 博士研究生',
            school: '中国科学技术大学',
            desc: '研究方向：三维感知、点云地理定位、扩散模型、多模态大模型等'
          },
          {
            period: '2022.09 - 2025.06',
            degree: '模式识别与智能系统 | 硕士研究生',
            school: '中国科学技术大学 | 985重点院校 (推免)',
            desc: '主修课程：矩阵代数，组合数学，计算机视觉，系统工程导论等'
          },
          {
            period: '2018.09 - 2022.06',
            degree: '测控技术与仪器 | 学士',
            school: '武汉理工大学 | 211工程院校',
            desc: '主修课程：嵌入式系统，计算机视觉，控制工程，测控仪器电子技术基础'
          }
        ]
      },
      experience: {
        title: '实习与项目经历',
        items: [
          {
            period: '2023.12 - 2024.08',
            title: '算法实习生',
            org: '常州先进技术研究所',
            achievements: [
              'Ubuntu20.04操作系统下利用ROS系统部署深度强化学习（TD3）算法',
              '引入长短时记忆（LSTM）组件，优化了传统TD3算法。实验结果表明，改进后显著提升了求解效率和准确性',
              '结合3D点云信息在Gazebo环境中进行目标感知与探索'
            ]
          },
          {
            period: '2024.01 - 2024.05',
            title: '移动机器人对动态小目标行人的快速检测',
            org: '项目负责人',
            achievements: [
              '针对YOLOv8存在Neck部分信息融合时效率低的问题，提出一种新的信息融合策略，同时引入Mixed local channel attention机制，实现了6%的Precison以及3%的mAP提升',
              '通过Model Pruning与轻量化策略，使得模型在保持精度的前提下参数量下降约50%，实现在移动机器人平台对动态小目标行人的高精度检测'
            ]
          },
          {
            period: '2024.05 - 2024.08',
            title: '采用多尺度动态优化策略的单阶段物体6D位姿估计算法',
            org: '项目负责人',
            achievements: [
              '针对位姿估计任务，通过多个尺度的动态优化策略使得改进后的检测器可以在不显著增加计算量的情况下，提高检测精度和速度，在ADD-S精度指标上，本文算法最大提升达到了10.259%',
              '通过使用Dynamic Snake Convolution动态调整卷积核的形状和位置，从而更好地捕捉目标的特征，同时引入动态采样器(Dysample)技术，旨在通过学习来进行上采样，优化检测效果'
            ]
          }
        ]
      },
      skills: {
        title: '专业技能',
        groups: [
          {
            name: '编程语言',
            items: ['Python', 'C/C++', 'Java']
          },
          {
            name: '框架工具',
            items: ['PyTorch', 'TensorFlow', 'ROS', 'Docker']
          },
          {
            name: '专业领域',
            items: ['深度学习', '计算机视觉', '目标检测', '6D位姿估计', '强化学习']
          }
        ]
      },
      awards: {
        title: '获奖荣誉',
        items: [
          { name: '中国科学技术大学校一等奖学金', date: '2024.09' },
          { name: '武汉理工大学校优秀毕业生', date: '2022.06' },
          { name: '中国机器人大赛国家一等奖', date: '2021.12' },
          { name: '节能减排竞赛国家三等奖', date: '2021.08' },
          { name: '工程训练竞赛省级二等奖', date: '2021.04' }
        ]
      }
    },
    en: {
      name: 'Xuewei Cao',
      title: ' ',
      contact: {
        university: 'University of Science and Technology of China',
        email: 'caoxuewei@mail.ustc.edu.cn',
        info: 'Male | Mar. 2000'
      },
      about: {
        title: 'About Me',
        content: 'I am a PhD student focusing on <strong>Artificial Intelligence and its Applications</strong> at the <strong>University of Science and Technology of China</strong>, majoring in <strong>Intelligence Science and Technology</strong>. I am passionate about technological innovation and aim to conduct in-depth research in the AI field to create more value.'
      },
      education: {
        title: 'Education',
        items: [
          {
            period: 'Sep. 2025 - Jun. 2029',
            degree: 'Intelligence Science and Technology | PhD',
            school: 'University of Science and Technology of China',
            desc: 'Research: 3D Perception, Point Cloud Geo-localization, Diffusion Models, Multi-modal LLMs'
          },
          {
            period: 'Sep. 2022 - Jun. 2025',
            degree: 'Pattern Recognition and Intelligent Systems | Master',
            school: 'University of Science and Technology of China | 985 Project (Recommended)',
            desc: 'Core Courses: Matrix Algebra, Combinatorial Mathematics, Computer Vision, Systems Engineering'
          },
          {
            period: 'Sep. 2018 - Jun. 2022',
            degree: 'Measurement and Control Technology | Bachelor',
            school: 'Wuhan University of Technology | 211 Project',
            desc: 'Core Courses: Embedded Systems, Computer Vision, Control Engineering, Electronics'
          }
        ]
      },
      experience: {
        title: 'Experience & Projects',
        items: [
          {
            period: 'Dec. 2023 - Aug. 2024',
            title: 'Algorithm Intern',
            org: 'Changzhou Institute of Advanced Technology',
            achievements: [
              'Deployed Deep Reinforcement Learning (TD3) algorithms using ROS system on Ubuntu 20.04',
              'Integrated LSTM components to optimize traditional TD3 algorithms, significantly improving solution efficiency and accuracy',
              'Combined 3D point cloud information for target perception and exploration in Gazebo environment'
            ]
          },
          {
            period: 'Jan. 2024 - May 2024',
            title: 'Fast Detection of Dynamic Small Target Pedestrians for Mobile Robots',
            org: 'Project Leader',
            achievements: [
              'Proposed a new information fusion strategy to address low efficiency in YOLOv8 Neck fusion, introduced Mixed Local Channel Attention mechanism, achieving 6% Precision and 3% mAP improvements',
              'Applied Model Pruning and lightweight strategies, reducing model parameters by ~50% while maintaining accuracy for high-precision pedestrian detection on mobile robot platforms'
            ]
          },
          {
            period: 'May 2024 - Aug. 2024',
            title: 'Single-stage 6D Object Pose Estimation with Multi-scale Dynamic Optimization',
            org: 'Project Leader',
            achievements: [
              'Developed multi-scale dynamic optimization strategies for pose estimation, improving detection accuracy and speed without significant computational overhead, achieving maximum 10.259% improvement on ADD-S metric',
              'Utilized Dynamic Snake Convolution to dynamically adjust kernel shapes and positions for better feature capture, integrated Dysample technology for learning-based upsampling optimization'
            ]
          }
        ]
      },
      skills: {
        title: 'Technical Skills',
        groups: [
          {
            name: 'Programming',
            items: ['Python', 'C/C++', 'Java']
          },
          {
            name: 'Frameworks',
            items: ['PyTorch', 'TensorFlow', 'ROS', 'Docker']
          },
          {
            name: 'Expertise',
            items: ['Deep Learning', 'Computer Vision', 'Object Detection', '6D Pose Estimation', 'Reinforcement Learning']
          }
        ]
      },
      awards: {
        title: 'Awards & Honors',
        items: [
          { name: 'First-class Scholarship, USTC', date: 'Sep. 2024' },
          { name: 'Outstanding Graduate, WHUT', date: 'Jun. 2022' },
          { name: 'National First Prize, China Robot Competition', date: 'Dec. 2021' },
          { name: 'National Third Prize, Energy Conservation Competition', date: 'Aug. 2021' },
          { name: 'Provincial Second Prize, Engineering Training Competition', date: 'Apr. 2021' }
        ]
      }
    }
  };
  
  let currentLang = 'zh';
  
  // Avatar upload functionality
  function initAvatarUpload() {
    const avatar = document.querySelector('.avatar');
    
    if (avatar) {
      avatar.addEventListener('click', function() {
        const fileInput = document.createElement('input');
        fileInput.type = 'file';
        fileInput.accept = 'image/*';
        
        fileInput.click();
        
        fileInput.addEventListener('change', function(e) {
          const file = e.target.files[0];
          
          if (file && file.type.match('image.*')) {
            const reader = new FileReader();
            reader.onload = function(event) {
              avatar.src = event.target.result;
              avatar.style.animation = 'none';
              avatar.offsetHeight; // Trigger reflow
              avatar.style.animation = 'pulse 0.8s ease-out';
            };
            reader.readAsDataURL(file);
          }
        });
      });
    }
  }
  
  // Enhanced skill animations
  function initSkillAnimations() {
    const skillTags = document.querySelectorAll('.skill-tag');
    
    // Stagger animation for skill tags
    skillTags.forEach((tag, index) => {
      tag.style.setProperty('--delay', index);
    });
    
    // Animate skill groups when visible
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const skillGroup = entry.target;
          const tags = skillGroup.querySelectorAll('.skill-tag');
          
          tags.forEach((tag, index) => {
            setTimeout(() => {
              tag.style.opacity = '1';
              tag.style.transform = 'translateY(0) scale(1)';
            }, index * 100);
          });
          
          observer.unobserve(skillGroup);
        }
      });
    }, {
      threshold: 0.3
    });
    
    document.querySelectorAll('.skill-group').forEach(group => observer.observe(group));
  }
  
  // Scroll animations for content sections
  function initScrollAnimations() {
    const animateOnScroll = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.style.opacity = '1';
          entry.target.style.transform = 'translateY(0)';
        }
      });
    }, {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    });
    
    // Animate content sections
    document.querySelectorAll('.content-section').forEach((section, index) => {
      section.style.opacity = '0';
      section.style.transform = 'translateY(20px)';
      section.style.transition = `opacity 0.6s ease ${index * 0.1}s, transform 0.6s ease ${index * 0.1}s`;
      animateOnScroll.observe(section);
    });
    
    // Animate timeline items
    document.querySelectorAll('.timeline-item').forEach((item, index) => {
      item.style.opacity = '0';
      item.style.transform = 'translateX(-20px)';
      item.style.transition = `opacity 0.4s ease ${index * 0.1}s, transform 0.4s ease ${index * 0.1}s`;
      animateOnScroll.observe(item);
    });
    
    // Animate experience items
    document.querySelectorAll('.experience-item').forEach((item, index) => {
      item.style.opacity = '0';
      item.style.transform = 'translateY(20px)';
      item.style.transition = `opacity 0.5s ease ${index * 0.1}s, transform 0.5s ease ${index * 0.1}s`;
      animateOnScroll.observe(item);
    });
    
    // Animate award items
    document.querySelectorAll('.award-item').forEach((item, index) => {
      item.style.opacity = '0';
      item.style.transform = 'scale(0.95)';
      item.style.transition = `opacity 0.4s ease ${index * 0.05}s, transform 0.4s ease ${index * 0.05}s`;
      animateOnScroll.observe(item);
    });
  }
  
  // Contact button functionality
  function initContactButton() {
    const contactBtn = document.querySelector('.contact-btn');
    
    if (contactBtn) {
      // Add tooltip
      contactBtn.title = '发送邮件';
      
      // Add click animation
      contactBtn.addEventListener('click', function() {
        this.style.transform = 'scale(0.95)';
        
        setTimeout(() => {
          this.style.transform = '';
        }, 150);
      });
      
      // Add hover effect for better feedback
      contactBtn.addEventListener('mouseenter', function() {
        this.style.boxShadow = '0 20px 25px -5px rgba(37, 99, 235, 0.3), 0 10px 10px -5px rgba(37, 99, 235, 0.2)';
      });
      
      contactBtn.addEventListener('mouseleave', function() {
        this.style.boxShadow = '';
      });
    }
  }
  
  // Floating elements background
  function initFloatingElements() {
    const floatingContainer = document.createElement('div');
    floatingContainer.className = 'floating-elements';
    floatingContainer.style.cssText = `
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      pointer-events: none;
      z-index: -1;
      overflow: hidden;
    `;
    
    // Create floating shapes
    for (let i = 0; i < 6; i++) {
      const element = document.createElement('div');
      element.style.cssText = `
        position: absolute;
        width: ${20 + Math.random() * 40}px;
        height: ${20 + Math.random() * 40}px;
        background: linear-gradient(45deg, 
          rgba(59, 130, 246, 0.1), 
          rgba(139, 92, 246, 0.1));
        border-radius: 50%;
        animation: float ${8 + Math.random() * 4}s ease-in-out infinite;
        animation-delay: ${Math.random() * 2}s;
        top: ${Math.random() * 100}%;
        left: ${Math.random() * 100}%;
      `;
      floatingContainer.appendChild(element);
    }
    
    document.body.appendChild(floatingContainer);
  }
  
  // Enhanced hover effects for skill tags
  document.querySelectorAll('.skill-tag').forEach(tag => {
    tag.addEventListener('mouseenter', function() {
      this.style.transform = 'translateY(-2px) scale(1.05)';
      this.style.boxShadow = '0 4px 12px rgba(59, 130, 246, 0.2)';
    });
    
    tag.addEventListener('mouseleave', function() {
      this.style.transform = '';
      this.style.boxShadow = '';
    });
  });
  
  // Add smooth hover effects to timeline items
  document.querySelectorAll('.timeline-content').forEach(content => {
    content.addEventListener('mouseenter', function() {
      const dot = this.parentElement.querySelector('.timeline-dot');
      if (dot) {
        dot.style.transform = 'scale(1.2)';
        dot.style.boxShadow = '0 0 0 6px rgba(37, 99, 235, 0.2)';
      }
    });
    
    content.addEventListener('mouseleave', function() {
      const dot = this.parentElement.querySelector('.timeline-dot');
      if (dot) {
        dot.style.transform = '';
        dot.style.boxShadow = '';
      }
    });
  });
  
  // Add click effects to award items
  document.querySelectorAll('.award-item').forEach(award => {
    award.addEventListener('click', function() {
      this.style.transform = 'translateY(-2px) scale(0.98)';
      
      setTimeout(() => {
        this.style.transform = '';
      }, 200);
    });
  });
  
  // Smooth scrolling for anchor links (if any)
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      const targetId = this.getAttribute('href').substring(1);
      const targetElement = document.getElementById(targetId);
      
      if (targetElement) {
        targetElement.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    });
  });
  
  // Add loading animation completion
  setTimeout(() => {
    document.body.style.opacity = '1';
  }, 100);
  
  // Language toggle functionality
  function initLanguageToggle() {
    const langBtn = document.getElementById('languageBtn');
    if (!langBtn) return;
    
    const flagIcon = langBtn.querySelector('.flag-icon');
    const langText = langBtn.querySelector('.lang-text');
    if (!flagIcon || !langText) return;
    
    langBtn.addEventListener('click', function() {
      // Toggle language
      currentLang = currentLang === 'zh' ? 'en' : 'zh';
      
      // Update button
      if (currentLang === 'en') {
        flagIcon.textContent = '🇨🇳';
        langText.textContent = '中文';
        langBtn.title = 'Switch to Chinese';
      } else {
        flagIcon.textContent = '🇺🇸';
        langText.textContent = 'EN';
        langBtn.title = 'Switch to English';
      }
      
      // Update content
      updateContent(currentLang);
      
      // Add click animation
      langBtn.style.transform = 'scale(0.95)';
      setTimeout(() => {
        langBtn.style.transform = '';
      }, 150);
    });
  }
  
  // Update content based on language
  function updateContent(lang) {
    const data = languageData[lang];
    
    // Update basic info
    document.querySelector('.name').textContent = data.name;
    document.querySelector('.title').textContent = data.title;
    
    const contactSpans = document.querySelectorAll('.contact span');
    contactSpans[0].textContent = data.contact.university;
    contactSpans[2].textContent = data.contact.email;
    contactSpans[4].textContent = data.contact.info;
    
    // Update about section
    document.querySelector('.about').previousElementSibling.textContent = data.about.title;
    document.querySelector('.about').innerHTML = data.about.content;
    
    // Update education section
    const educationSection = document.querySelector('.timeline').parentElement;
    educationSection.querySelector('h2').textContent = data.education.title;
    const educationItems = educationSection.querySelectorAll('.item');
    data.education.items.forEach((item, index) => {
      if (educationItems[index]) {
        educationItems[index].querySelector('.period').textContent = item.period;
        educationItems[index].querySelector('.details h3').textContent = item.degree;
        educationItems[index].querySelector('.org').textContent = item.school;
        educationItems[index].querySelector('.desc').textContent = item.desc;
      }
    });
    
    // Update experience section
    const experienceItems = document.querySelectorAll('.timeline')[1].querySelectorAll('.item');
    const experienceH2 = document.querySelectorAll('.timeline')[1].parentElement.querySelector('h2');
    experienceH2.textContent = data.experience.title;
    
    data.experience.items.forEach((item, index) => {
      if (experienceItems[index]) {
        experienceItems[index].querySelector('.period').textContent = item.period;
        experienceItems[index].querySelector('.details h3').textContent = item.title;
        experienceItems[index].querySelector('.org').textContent = item.org;
        
        const achievements = experienceItems[index].querySelectorAll('.achievements li');
        item.achievements.forEach((achievement, achIndex) => {
          if (achievements[achIndex]) {
            achievements[achIndex].textContent = achievement;
          }
        });
      }
    });
    
    // Update skills section
    const skillsH2 = document.querySelector('.skills').parentElement.querySelector('h2');
    skillsH2.textContent = data.skills.title;
    
    const skillGroups = document.querySelectorAll('.skill-group');
    data.skills.groups.forEach((group, index) => {
      if (skillGroups[index]) {
        skillGroups[index].querySelector('strong').textContent = group.name;
        const skillTags = skillGroups[index].querySelectorAll('.skill-tag');
        group.items.forEach((skill, skillIndex) => {
          if (skillTags[skillIndex]) {
            skillTags[skillIndex].textContent = skill;
          }
        });
      }
    });
    
    // Update awards section
    const awardsH2 = document.querySelector('.awards').parentElement.querySelector('h2');
    awardsH2.textContent = data.awards.title;
    
    const awardItems = document.querySelectorAll('.award');
    data.awards.items.forEach((award, index) => {
      if (awardItems[index]) {
        awardItems[index].querySelector('strong').textContent = award.name;
        awardItems[index].querySelector('.date').textContent = award.date;
      }
    });
    
    // Update document title
    document.title = lang === 'zh' ? '曹学伟 - 个人简历' : 'Xuewei Cao - Resume';
  }
  
  // Console message with style
  console.log('%c✨ Enhanced Resume Loaded - Modern & Interactive Design with Language Toggle', 
    'background: linear-gradient(45deg, #667eea, #764ba2); color: white; padding: 8px 16px; border-radius: 8px; font-weight: bold;');
});

// Set initial body opacity for smooth loading
document.body.style.opacity = '0';
document.body.style.transition = 'opacity 0.3s ease';