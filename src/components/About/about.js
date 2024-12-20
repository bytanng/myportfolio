import React from 'react'
import './about.css';
import ntu from '../../assets/ntu.png';
import nyp from '../../assets/nyp.png';
import gf from '../../assets/gf.png';
import ibm from '../../assets/ibm.png';
import bcg from '../../assets/bcg.png';
import ncs from '../../assets/ncs.png';


export const About = () => {
    return (
        <section id="about">
            <span className='aboutTitle'>About Me</span>
            <span className='aboutDescription'><p>I am a graduate of Nanyang Technological University, where I majored in Information Engineering and Media, a discipline that blends art and technology. Currently based in the vibrant city of Singapore, I am a full-time Software Engineer with a focus on Java, where I work on building reliable and scalable solutions to address real-world challenges. My passion for coding has driven me to continuously refine my skills and stay at the forefront of technological advancements. My goal is to harness the power of technology to create innovative solutions that make a positive impact.</p>
            </span>
            <span className='aboutTitle2'>Education</span>
            <div className='aboutBars'>
                <div className="aboutBar">
                    <img src={ntu} alt="UIDesign" className='aboutBarImg1' />
                    <div className='aboutBarText'>
                        <h4>Nanyang Technological University</h4>
                        <p><strong>School of Electrical and Electronic Engineering</strong></p>
                        <p>• Bachelor of Engineering in Information Engineering and Media (Honours)</p>
                        <p>Aug 2020 - Jun 2024</p>
                    </div>
                </div>
                <div className="aboutBar">
                    <img src={nyp} alt="WebDesign" className='aboutBarImg1' />
                    <div className='aboutBarText'>
                        <h4>Nanyang Polytechnic</h4>
                        <p><strong>School of Information Technology</strong></p>
                        <p>• Diploma in Engineering Informatics</p>
                        <p>Apr 2015 - May 2018</p>
                    </div>
                </div>
            </div>
            <span className='aboutTitle3'>Experience</span>
            <div className='aboutBars'>
                <div className="aboutBar">
                    <img src={ncs} alt="UIDesign" className='aboutBarImg3' />
                    <div className='aboutBarText'>
                        <h4>NCS Pte Ltd</h4>
                        <p>• Software Engineer</p>
                        <p>Jul 2024 - Current</p>
                    </div>
                </div>
                <div className="aboutBar">
                    <img src={gf} alt="UIDesign" className='aboutBarImg2' />
                    <div className='aboutBarText'>
                        <h4>GlobalFoundries Singapore</h4>
                        <p>• Software Tester, Intern</p>
                        <p>May 2022 - Jan 2023</p>
                    </div>
                </div>
                <div className="aboutBar">
                    <img src={ibm} alt="WebDesign" className='aboutBarImg2' />
                    <div className='aboutBarText'>
                        <h4>International Business Machines Corp (IBM)</h4>
                        <p>• Deskside Engineer</p>
                        <p>Jun 2021 - Jul 2021</p>
                    </div>
                </div>
                <div className="aboutBar">
                    <img src={bcg} alt="AppDesign" className='aboutBarImg2' />
                    <div className='aboutBarText'>
                        <h4>The Boston Consulting Group</h4>
                        <p>• Case Team Assistant</p>
                        <p>May 2018 - Jun 2018</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About;
