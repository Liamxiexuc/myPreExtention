import React, { useState, useEffect, Fragment } from 'react';
import { Redirect } from 'react-router-dom';
import Layout from '../components/Layout.jsx';
import Card from './components/Card.jsx';
import Modal from '../components/Modal';
import { handleBaiscPropertyData } from '../../../utils/tools.js';
import { getPropertyInfo } from '../../../utils/content.js';
import { requestGetProperty } from '../../../services/property.js';
import Loading from '../components/Loading';
import styles from './Unauthed.module.css';

const Unauthed = ({ history }) => {
  const [active, setActive] = useState('PROPERTY INTELLIGENCE');
  const [data, setData] = useState({});
  const [isError, setIsError] = useState(false);
  const [propertyData, setPropertyData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [modal, setModal] = useState(false);
  const [limitModal, setLimitModal] = useState(false);

  useEffect(() => {
    const getPropertyData = async () => {
      setIsError(false);
      setIsLoading(true);
      const propertyInfo = await getPropertyInfo();
      setData(propertyInfo);
      const { suburb, lat, lng, url } = propertyInfo;
      const payload = {
        suburb,
        lat,
        lng,
        url,
      };
      try {
        const rawPropertyData = await requestGetProperty(payload);
        const propertyData = handleBaiscPropertyData(rawPropertyData);
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
  // TODO add limit Error handler
  // if (isError) {
  //   const errorCode = isError.response.status;
  //   if (errorCode === 429) {
  //     console.log('object');
  //     return;
  //   }
  //   return (
  //     <Redirect
  //       to={{ pathname: '/error', state: { error: isError } }}
  //     />
  //   );
  // }

  const handleClick = () => {
    setModal(!modal);
  };

  const handleConfirm = () => history.push('/registration');

  return (
    <Layout btn="login" lightning signup>
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
                <h5
                  onClick={handleClick}
                  className={styles.cardTitle}
                >
                  PROPERTY INTELLIGENCE
                </h5>
              )}
              <h5 onClick={handleClick} className={styles.cardTitle}>
                STREET INTELLIGENCE
              </h5>
              <h5 onClick={handleClick} className={styles.cardTitle}>
                SUBURB INTELLIGENCE
              </h5>
              <h5 onClick={handleClick} className={styles.cardTitle}>
                LGA INTELLIGENCE
              </h5>
            </section>
            <Modal
              visible={modal}
              onCancel={() => setModal(false)}
              onOk={handleConfirm}
              title="Unlock more features"
              cancelText="No, thanks"
            >
              <div>
                Register your own account and get access to more
                advanced features.
              </div>
            </Modal>
            <Modal
              visible={limitModal}
              onCancel={() => setLimitModal(false)}
              onOk={handleConfirm}
              title="Weekly limit reached"
              cancelText="No, thanks"
            >
              <p className={styles.text}>
                You have reached the max number of requests (5
                per/week), please try again after 7 days.
              </p>
              <div className={styles.divider}>
                <span>OR</span>
              </div>
              <p className={styles.text}>
                Register your own account to increase your weekly
                limits and get access to more advanced features.
              </p>
            </Modal>
          </main>
        </Fragment>
      )}
    </Layout>
  );
};

export default Unauthed;
