import React, { Component } from 'react';

const withStoreInfo = (WrappedComponent) => {
  return class extends Component {
    state = {
      storeInfo: {},
    };

    componentDidMount() {
      fetch('https://657983e51acd268f9af93e52.mockapi.io/shop-info') 
        .then(response => response.json())
        .then(data => {
          this.setState({ storeInfo: data[0] });
          console.log('Компонент "AboutPage" смонтирован.');
          console.log('Информация о магазине:', data[0]);
        })
        .catch(error => {
          console.error('Ошибка получения данных из mockapi:', error);
        });
    }

    render() {
      const { storeInfo } = this.state;
      return <WrappedComponent storeInfo={storeInfo} {...this.props} />;
    }
  };
};

export default withStoreInfo;
