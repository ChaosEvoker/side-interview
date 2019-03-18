import React, { Component } from 'react';
import ReactTooltip from 'react-tooltip';
import './HouseCard.css';

class HouseCard extends Component {

  renderSaveButton() {
    if (this.props.saved) {
      return <button className="save-btn saved"><i className="fas fa-check"></i>Saved!</button>;
    } else {
      return <button onClick={() => {this.props.onSave(this.props.mlsId)}} className="save-btn"><i className="fas fa-save"></i>Save this Property</button>;
    }
  }

  render() {
    return (
      <div className="HouseCard">
        <div className="image-block">
          <img alt="Property" src={this.props.picture_url} />
        </div>
        <div className="info-block">
          <div className="price">${this.props.listPrice.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</div>
          <div className="list-date">Listed: {this.props.listDate}</div>
          <div className="icon-wrapper">
            <div alt="Stories" data-tip="Stories"><i className="fas fa-building"></i>{this.props.stories}</div>
            <div alt="Bedrooms" data-tip="Bedrooms"><i className="fas fa-bed"></i>{this.props.bedrooms}</div>
          </div>
          <div className="icon-wrapper">
            <div alt="Half Bathrooms" data-tip="Half Bathrooms"><i className="fas fa-toilet"></i>{this.props.half_baths}</div>
            <div alt="Full Bathrooms" data-tip="Full Bathrooms"><i className="fas fa-bath"></i>{this.props.full_baths}</div>
          </div>
          <div className="save-block">
            {this.renderSaveButton()}
            <div className="mlsid">MLS ID: {this.props.mlsId}</div>
          </div>
        </div>
        <ReactTooltip place="left" type="dark" effect="float"/>
      </div>
    );
  }
}

export default HouseCard;
