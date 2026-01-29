import styles from "./ControlPanel.module.scss"

const buttons = [
    { name: "Add new product" },
    { name: "Update the list" },
    { name: "Sort by" },
    { name: "Delete selected products" },
    { name: "Delete all products" },

]

function ControlPanel() {
    return (
        <section className={`${styles.control_panel_content} section`}>
            <div className={`${styles.container} container`}>
                <div className={`${styles.row} row`}>
                    <div className={`${styles.column} column`}>
                        <h1 className={styles.title}>Control panel</h1>

                        <nav className={styles.button_navigation}>
                            <div className={styles.button_wrap}>
                                {buttons.map(({ name }) => (
                                    <button className={styles.button}>{name}</button>
                                ))}
                            </div>
                        </nav>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ControlPanel