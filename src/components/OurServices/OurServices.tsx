import React from 'react'
import styles from './OurServices.module.css'
type Props = {}

const OurServices = (props: Props) => {
    return (
        <div className={styles.our_services}>
            <h4>OUR SERVICES</h4>

            <div className={styles.parent1}>
                <div></div>
                <div></div>
                <div className={styles.content}>
                    Website Designing & Development
                </div>
            </div>

            <div className={styles.parent2}>
                <div></div>
                <div></div>
                <div className={styles.content}>
                    Social Media Management
                </div>
            </div>

            <div className={styles.parent3}>
                <div></div>
                <div></div>
                <div className={styles.content}>
                    Search Engine Optimization
                </div>
            </div>

            <div className={styles.parent4}>
                <div></div>
                <div></div>
                <div className={styles.content}>
                    GRAPHIC DESIGNING
                </div>
            </div>
        </div>
    )
}

export default OurServices