import React, { useState, useEffect, Fragment } from 'react';
import { Redirect } from 'react-router-dom';
import Layout from '../components/Layout.jsx';
import Card from './components/Card.jsx';
import Modal from '../components/Modal';
import { sendProperty } from '../../../utils/property.js';
import { handlePropertyData } from '../../../utils/tools.js';
import { getPropertyInfo } from '../../../utils/content.js';
import Loading from '../components/Loading';
import styles from './Authed.module.css';

const Authed = ({ history }) => {
  const [active, setActive] = useState('PROPERTY INTELLIGENCE');
  const [data, setData] = useState({});
  const [isError, setIsError] = useState(false);
  const [propertyData, setPropertyData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [limitModal, setLimitModal] = useState(false);

  const goInvite = () => history.push('/invite');
  const handleClick = () => setLimitModal(!limitModal);

  useEffect(() => {
    const getPropertyData = async () => {
      setIsError(false);
      setIsLoading(true);
      const propertyInfo = await getPropertyInfo();
      setData(propertyInfo);
      try {
        const rawPropertyData = await sendProperty(propertyInfo);
        const propertyData = handlePropertyData(rawPropertyData);
        setPropertyData(propertyData);
        setIsLoading(false);
      } catch (error) {
        setIsLoading(false);
        const { status } = error.response;
        if (status === 429) return setLimitModal(true);
        setIsError(error);
      }
    };

    getPropertyData();
  }, []);

  return (
    <Layout lightning home>
      {isError && (
        <Redirect
          to={{ pathname: '/error', state: { error: isError } }}
        />
      )}

      {isLoading ? (
        <Loading />
      ) : (
        <Fragment>
          <h1
            className={styles.title}
          >{`${data.address}, ${data.suburb}`}</h1>
          <main className={styles.property}>
            <section className={styles.container}>
              {propertyData.length ? (
                propertyData.map((i) => (
                  <Card
                    key={i.title}
                    title={i.title}
                    data={i.data}
                    active={active}
                    setActive={setActive}
                  />
                ))
              ) : (
                <>
                  <h5
                    onClick={handleClick}
                    className={styles.cardTitle}
                  >
                    PROPERTY INTELLIGENCE
                  </h5>
                  <h5
                    onClick={handleClick}
                    className={styles.cardTitle}
                  >
                    STREET INTELLIGENCE
                  </h5>
                  <h5
                    onClick={handleClick}
                    className={styles.cardTitle}
                  >
                    SUBURB INTELLIGENCE
                  </h5>
                  <h5
                    onClick={handleClick}
                    className={styles.cardTitle}
                  >
                    LGA INTELLIGENCE
                  </h5>
                </>
              )}
            </section>
            <Modal
              visible={limitModal}
              onCancel={() => setLimitModal(false)}
              onOk={goInvite}
              title="Weekly limit reached"
              cancelText="No, thanks"
              okText="Invite"
            >
              <p className={styles.text}>
                You have reached the max number of requests (10
                per/week), please try again after 7 days.
              </p>
              <div className={styles.divider}>
                <span>OR</span>
              </div>
              <p className={styles.text}>
                Invite 3 Users to get access to unlimited property
                intelligence data points.
              </p>
            </Modal>
          </main>
        </Fragment>
      )}
    </Layout>
  );
};

export default Authed;
