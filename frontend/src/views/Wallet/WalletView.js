import './Wallet.css';
import '../../assets/css/App.css';
import React from 'react';
import logo from '../../assets/img/logo.png';
import SidebarView from '../Sidebar/SidebarView.js';
import Blockies from 'react-blockies';

export default class WalletView extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <SidebarView 
                    username={this.props.username}
                    selected="wallet"
                />
                <div className="wallet-container">
                    <div className="wallet-filler">
                    </div>
                    <div className="wallet">
                        <div className="outer-container">
                            <div className="page-header">
                                <p className="wallet-title">Wallet</p>
                                <div className="battery-card">
                                    <div className="battery">
                                        <div className="battery-fill" style={{flex: this.props.battery}}>
                                        </div>
                                        <div className="battery-empty" style={{flex: 100 - this.props.battery}}>
                                        </div>
                                    </div>
                                    <p className="battery-text">Battery: {Math.round((this.props.battery / 100) * 100)}%</p>
                                    <p className="battery-text">Energy: {this.props.battery} kWh</p>
                                </div>
                            </div>
                            <div className="container">
                                <div className="primary-col">
                                    <p className="wallet-subtitle">For Buyers</p>
                                    <div className="buy-price-toggle">
                                        <p className="toggle-title">BUY PRICE</p>
                                        <div className="toggle-display">
                                            <p className="toggle-input">{this.props.buyPrice} ETH</p>
                                            <div className="adjust-button">
                                                <p className="adjust-buy-button-text">ADJUST</p>
                                            </div>
                                        </div>
                                        <p className="toggle-info">This is your minimum price per share (1 kWh). You will only buy energy shares at this price or below.</p>
                                    </div>
                                </div>
                                <div className="primary-col">
                                    <p className="wallet-subtitle">For Sellers</p>
                                    {
                                        this.props.producer ?
                                        <div className="sell-price-toggle">
                                            <p className="toggle-title">SELL PRICE</p>
                                            <div className="toggle-display">
                                                <p className="toggle-input">{this.props.sellPrice} ETH</p>
                                                <div className="adjust-button">
                                                    <p className="adjust-sell-button-text">ADJUST</p>
                                                </div>
                                            </div>
                                            <p className="toggle-info">This is your minimum price per share (1 kWh). You will only sell energy shares at this price or above.</p>
                                        </div> :
                                        <div className="sell-price-toggle" style={{opacity: 0.5}}>
                                            <p className="toggle-title">SELL PRICE</p>
                                            <div className="toggle-display">
                                                <p className="toggle-input">N/A</p>
                                                <div className="adjust-button">
                                                    <p className="adjust-sell-button-text">ADJUST</p>
                                                </div>
                                            </div>
                                            <p className="toggle-info">This is your minimum price per share (1 kWh). You will only sell energy shares at this price or above.</p>
                                        </div>
                                    }
                                    <div className="sell-price-toggle" style={{marginTop: 32, height: 300}}>
                                        <p className="toggle-title">MAKE LISTING</p>
                                        <div className="match-box-text-row">
                                            <p className="match-box-text"><b>Shares</b>: 4</p>
                                            <p className="match-box-text"><b>Price</b>: .07 ETH</p>
                                        </div>
                                        <p className="toggle-info">This will create an energy listing that buyers in your network can purchase.</p>
                                        <div className="adjust-button">
                                            <p className="adjust-sell-button-text">CREATE</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="secondary-col">
                                    <p className="wallet-subtitle">New Purchases</p>
                                    <div className="matches-button">
                                        <p className="matches-button-text">FIND MATCH</p>
                                    </div>
                                    <div className="match-box">
                                        <p className="match-box-vendor">Vendor:</p>
                                        <p className="match-box-vendor-value">0x5678909876545678987</p>
                                        <p className="match-box-display">0.5 ETH</p>
                                        <div className="match-box-text-row">
                                            <p className="match-box-text"><b>Shares</b>: 4</p>
                                            <p className="match-box-text"><b>Price</b>: .07 ETH</p>
                                        </div>
                                        <div className="accept-button">
                                            <p className="accept-button-text">ACCEPT</p>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
      }
}