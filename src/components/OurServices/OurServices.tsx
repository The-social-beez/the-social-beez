"use client"
import React, { useEffect, useRef } from 'react'
import styles from './OurServices.module.css'
import { AnimationControls, motion, useScroll, useTransform } from 'framer-motion'
import { useInView } from 'framer-motion'

type Props = {}

const OurServices = (props: Props) => {

    const ref = useRef(null)
    const isInView = useInView(ref, { once: true, amount: 0.2 })


    // const { scrollYProgress } = useScroll({
    //     target: ref,
    //     offset: ["start end", "end start"],
    // })

    // const positionY = useTransform(scrollYProgress, [0, 1], ["100%", "-200%"])

    const fadeInAnimationVariants = {
        initial: {
            opacity: 0,
            x: -500,
        },
        animate: (index: number) => ({
            opacity: isInView ? 1 : 0,
            x: isInView ? 0 : -500,
            transition: {
                delay: 0.4 * index,
            }
        })
    }

    // useEffect(() => {
    //     console.log("Element is in view: ", isInView)
    // }, [isInView])

    return (
        <section id="ourservices" className={styles.our_services} ref={ref}
        >
            <h4>OUR SERVICES</h4>

            <motion.div className={styles.parent1}
                variants={fadeInAnimationVariants}
                initial='initial'
                animate='animate'
                custom={1}
            // style={{ y: positionY }}
            >
                <div></div>
                <div></div>
                <div className={styles.content}>
                    Website Designing & Development
                </div>
            </motion.div>

            <motion.div className={styles.parent2}
                variants={fadeInAnimationVariants}
                initial='initial'
                animate='animate'
                custom={2}
            // style={{ y: positionY }}
            >
                <div></div>
                <div></div>
                <div className={styles.content}>
                    Social Media Management
                </div>
            </motion.div>

            <motion.div className={styles.parent3}
                variants={fadeInAnimationVariants}
                initial='initial'
                animate='animate'
                custom={3}
            // style={{ y: positionY }}
            >
                <div></div>
                <div></div>
                <div className={styles.content}>
                    Search Engine Optimization
                </div>
            </motion.div>

            <motion.div className={styles.parent4}
                variants={fadeInAnimationVariants}
                initial='initial'
                animate='animate'
                custom={4}
            // style={{ y: positionY }}
            >
                <div></div>
                <div></div>
                <div className={styles.content}>
                    GRAPHIC DESIGNING
                </div>
            </motion.div>
        </section>
    )
}

export default OurServices