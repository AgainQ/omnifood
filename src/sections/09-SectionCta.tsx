import styles from './09-SectionCta.module.css';

export default function SectionCta() {
  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    console.log('Submit form');
  }

  return (
    <section className={styles.section}>
      <div className='container'>
        <div className={styles.cta}>
          <div className={styles.textBox}>
            <h2 className={styles.heading}>Get your first meal for free!</h2>
            <p className={styles.text}>
              Healthy, tasty and hassle-free meals are waiting for you. Start eating well
              today. You can cancel or pause anytime. And the first meal is on us!
            </p>

            <form onSubmit={handleSubmit} className={styles.form}>
              <div>
                <label htmlFor='fullName'>Full Name</label>
                <input id='fullName' type='text' placeholder='John Smith' required />
              </div>

              <div>
                <label htmlFor='email'>Email address</label>
                <input id='email' type='email' placeholder='me@example.com' required />
              </div>

              <div>
                <label htmlFor='hearFrom'>Where did you hear form us?</label>
                <select id='hearFrom'>
                  <option>Please choose an option</option>
                  <option value='friends'>Friends and family</option>
                  <option value='youtube'>Youtube</option>
                  <option value='facebook'>Facebook</option>
                  <option value='podcast'>Podcast</option>
                  <option value='others'>Others</option>
                </select>
              </div>

              <button className={styles.btn}>Sign up now</button>
            </form>
          </div>

          <div className={styles.imgBox} role='bg-img'></div>
        </div>
      </div>
    </section>
  );
}
