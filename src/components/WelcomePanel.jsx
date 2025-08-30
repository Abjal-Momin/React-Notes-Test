import bgImage from "../assets/image-removebg.png";
import vector from "../assets/Vector.png";
import styles from "../styles/WelcomePanel.module.css";

function WelcomePanel() {
  return (
    <div className={styles.welcomePanel}>
      <div className={styles.welcomeContent}>
        <img className={styles.welcomeImage} src={bgImage} alt="Book and Pen" />
        <h2>Pocket Notes</h2>
        <p>
          Send and receive messages without keeping your phone online.
          <br />
          Use Pocket Notes on up to 4 linked devices and 1 mobile phone
        </p>
      </div>
      <div className={styles.welcomeFooter}>
        <span>
          <img src={vector} alt="Lock Icon" /> end-to-end encrypted
        </span>
      </div>
    </div>
  );
}

export default WelcomePanel;
