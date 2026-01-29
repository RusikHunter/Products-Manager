import FAQQuestions from "@/config/faq-questions"
import styles from "./FAQContentSection.module.scss"

function FAQContentSection() {
    return (
        <section className="faq_content">
            <div className={`${styles.container} container`}>
                <div className={`${styles.row} row`}>
                    <div className={`${styles.column} column`}>
                        <dl className={styles.description_list}>
                            {FAQQuestions.map(({ question, answer }) => (
                                <div className={styles.description_list__td_wrap}>
                                    <dt className={styles.description_term}>{question}</dt>
                                    <dd className={styles.description_definition}>{answer}</dd>
                                </div>
                            ))}
                        </dl>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default FAQContentSection