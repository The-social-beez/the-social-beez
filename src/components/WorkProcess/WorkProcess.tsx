import React from 'react'
import './WorkProcess.css'
import Image from 'next/image'

type Props = {}

const WorkProcess = (props: Props) => {
  return (
    <section id="workprocess" className={`workprocess`}>

      <div className={`left`}>
        <h4>WHAT IS THE WORK PROCESS ?</h4>
      </div>

      <div className={`right`}>
        <div className={`cardCover`}>
          <Image priority={false} className={`beePath1`} height={200} width={150} src={'/bee_path-removebg-preview.png'} alt={''} />

          <div className={`cards` + ' bg-[#25bdbe]'}>
            <p className={`front`}>MEET-UP</p>
            <p className={`back`}>&ldquo;Connect, Collaborate, and Conquer the Digital World with Our Meetup!&rdquo;</p>
          </div>
        </div>

        <div className={`cardCover`}>
          <div className={`cards` + ' bg-[#ff738e]'}>
            <p className={`front`}>DISCUSS</p>
            <p className={`back`}>&ldquo;Unlock Insights, Spark Ideas, and Drive Success through Discussions&rdquo;</p>
          </div>
        </div>

        <div className={`cardCover`}>
          <Image priority={false} className={`beePath2`} height={200} width={150} src={'/bee_path-removebg-preview.png'} alt={''} />

          <div className={`cards` + ' bg-[#ff738e]'}>
            <p className={`front`}>SHARE POA</p>
            <p className={`back`}>&ldquo;Collaborate, Brainstorm, and Chart Your Path to Marketing Success&rdquo;</p>
          </div>
        </div>

        <div className={`cardCover`}>
          <div className={`cards` + ' bg-[#FFA53B]'}>
            <p className={`front`}>REVISE</p>
            <p className={`back`}>&ldquo;Discover, Pivot, and Supercharge Your Marketing Strategies&rdquo;</p>
          </div>
        </div>

        <div className={`cardCover`}>
          <Image priority={false} className={`beePath3`} height={200} width={150} src={'/bee_path-removebg-preview.png'} alt={''} />

          <div className={`cards` + ' bg-[#25bdbe]'}>
            <p className={`front`}>APPROVAL</p>
            <p className={`back`}>&ldquo;Give the Grant approval, Propel, and Achieve Marketing Greatness&rdquo;</p>
          </div>
        </div>

        <div className={`cardCover`}>
          <div className={`cards` + ' bg-[#FFD93B]'}>
            <p className={`front`}>LAUNCH</p>
            <p className={`back`}>&ldquo;Kickstart, Innovate, and Illuminate the Digital Sphere&rdquo;</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default WorkProcess