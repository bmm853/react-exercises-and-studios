import styles from './ChoresList.module.css';

export default function ChoresList () {
   return (
      <div>
         <h3 className={styles.choresHeading}>Chores</h3>
         <ul className={styles.choresText}>
            <li>Laundry</li>
            <li>Dishes</li>
         </ul>
       {/* <p className={styles.choresText}>No content is here!</p>; */}
      </div>
   );
}