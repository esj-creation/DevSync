import video from '../img/vedio1.mp4';
import './navbar';


export default function Home() {

  return (
    <>
      <div className='main'>
        <div className='mainTop'>
          <div className="background-video">
            <video autoPlay loop muted>
              <source src={video} type="video/mp4"/>
            </video>
            <div className="content">
              <h1 className='contentH'>From Zero to Hero in Tech</h1>
              <h1 className='contentH2'> Master Programming and Coding for Epic Achievements</h1>
              <p className='contentP'>
                Welcome to the World of Infinite Possibilities!
                Where your aspirations and dreams become a reality!
                Discover a comprehensive roadmap to achieving your professional
                ambitions  and  unlocking unparalleled success in the dynamic world of
                technology. We guide you through an enriching journey of professional growth.
                Equipping you with the essential tools and knowledge to turn your dreams into triumphant realities.
              </p>
            </div>
          </div>
        </div>
        <div className='mainMiddle'>
          <div className='whyLearningHere'>
            <h1 className='mainMiddleH1'>Why Choose the Path of Coding Mastery?</h1>
          </div>
          <div className='MiddleContent'>
            <h1 className='MiddleH2'>Here are the Benefits of Learning Programming and Coding For Your Career</h1>
            <div className='benefits'>
              <h2 className='strong'>Unparalleled Employablility</h2>
              <p className='MiddleP'>
                In today&rsquo;s technology-driven world, proficiency in programming and coding opens up a vast array of career opportunities across industries. From software development and web design to data analysis and cybersecurity, companies seek skilled programmers to drive their digital transformation.
              </p>
            </div>
            <div className='benefits'>
              <h2 className='strong'>Lucrative Salaries</h2>
              <p className='MiddleP'>
                The demand for programming and coding expertise often exceeds supply, leading to highly competitive salaries. Skilled programmers are rewarded with attractive compensation packages and significant earning potential throughout their careers.
              </p>
            </div>
            <div className='benefits'>
            <h2 className='strong'>Constant Innovation</h2>
              <p className='MiddleP'>
                As a programmer, you become an architect of innovation, shaping the future through technological advancements. Working on cutting-edge projects allows you to stay at the forefront of industry trends and contribute to groundbreaking solutions.
              </p>
            </div>
            <div className='benefits'>
              <h2 className='strong'>Entrepreneurial Opportunities</h2>
              <p className='MiddleP'>
                Knowing how to code empowers you to transform your innovative ideas into functional products or services. As an entrepreneur, you can build startups, develop apps, or create online platforms, leveraging your coding skills to turn your visions into reality.
              </p>
            </div>
            <div className='benefits'>
              <h2 className='strong'>Flexibility and Remote Work</h2>
              <p className='MiddleP'>
                Programming careers often offer remote work options and flexible schedules. This flexibility allows you to strike a better work-life balance, choose your preferred work environment, and work with global teams from the comfort of your home.
              </p>
            </div>
            <div className='benefits'>
              <h2 className='strong'>Problem-Solving Skills</h2>
              <p className='MiddleP'>
                Coding challenges you to think critically and solve complex problems logically. These skills are highly transferable and beneficial not only in your career but also in various aspects of life.
              </p>
            </div>
            <div className='benefits'>
              <h2 className='strong'>Creativity and Artistry</h2>
              <p className='MiddleP'>
                Programming is an art, where you get to bring your creative ideas to life. Designing intuitive user interfaces, crafting elegant algorithms, and creating captivating websites are just a few ways to express your artistic side through coding.
              </p>
            </div>
            <div className='benefits'>
              <h2 className='strong'>Continuous Learning and Growth</h2>
              <p className='MiddleP'>
                The technology landscape evolves rapidly, and learning programming ensures you remain adaptable and equipped to embrace emerging technologies. Continuous learning becomes a way of life, leading to personal and professional growth throughout your career.
              </p>
            </div>
            <div className='benefits'>
              <h2 className='strong'>Global Networking</h2>
              <p className='MiddleP'>
                The programming community is vast and diverse, with numerous opportunities to connect with like-minded individuals through tech conferences, forums, and online communities. Networking with professionals worldwide enriches your knowledge and expands your horizons.
              </p>
            </div>
            <div className='benefits'>
              <h2 className='strong'>Job Security</h2>
              <p className='MiddleP'>
                As technology becomes increasingly ingrained in society, the demand for skilled programmers continues to rise. Learning to code provides a stable career path with ample job security, even in uncertain economic times.
              </p>
            </div>
            <div className='benefits'>
              <h2 className='strong'>Versatility Across Industries</h2>
              <p className='MiddleP'>
                Coding skills are not confined to one specific industry. Whether it&apos;s finance, healthcare, entertainment, or education, programming expertise is sought after in various sectors, allowing you to explore diverse career paths.
              </p>
            </div>
            <div className='benefits'>
              <h2 className='strong'>Global Impact</h2>
              <p className='MiddleP'>
                By contributing to the development of software and applications, you have the potential to impact the lives of millions worldwide. Creating solutions that improve efficiency, accessibility, and quality of life for people can be incredibly rewarding.
              </p>
            </div>
            <div className='benefits'>
              <h2 className='strong'>Immediate Freelancing Possibilities</h2>
              <p className='MiddleP'>
                As you gain proficiency in programming and coding, you can freelance and take on real-time projects independently. This allows you to build a diverse client base and earn income while pursuing your passion.
              </p>
            </div>
            <div className='benefits'>
              <h2 className='strong'>Remote Work Opportunities</h2>
              <p className='MiddleP'>
              Many tech-related positions offer remote work options. With coding skills in your arsenal, you can explore job opportunities that allow you to work from anywhere, giving you greater flexibility in your career.
              </p>
            </div>
          </div>
        </div>
        <div className='mainBottom'>
          <div className='BottomSub'>
            <h1 className='BottomH1'>Take a Moment to Explore the Vast World of Knowledge Awaiting You.</h1>
          </div>
          <div className='BottomSub'>
            <div className='path3'>
              Web Development
            </div>
            <div className='path3'>
              Android Development
            </div>
            <div className='path3'>
              Cyber Security
            </div>
          </div>
        </div>
        <div className='footer'>
          <div className='footerTerm'>
          
          </div>
          © 2023 Coding Helper<br/>
          Free Programming Learning System<br/>
          All Rights Reserved.
        </div>
      </div>

    </>
  )
}
