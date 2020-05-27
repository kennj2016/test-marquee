import React, {Component} from 'react';
import arrowIcon from '../assets/arrowIcon.jpg'
class MarqueeComponent extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        let {currentPage} = this.props
        return (
        <React.Fragment>
            <section className="main-content">
                <div className="container">

                    <div className="row">
                        <div className="col-lg-6">
                            <h2 className="head-title">{currentPage.title}</h2>
                        </div>
                        <div className="col-lg-6">

                            <p>{currentPage.blocks[0].subhead}</p>
                        </div>
                    </div>
                </div>
            </section>
            <section className="cta-section">
                <div className="container">
                    <div className="marquee-section">
                        <div className="inner-box">
                            {currentPage.blocks[0].cta}
                            <span>LET'S TALK <img src={arrowIcon} width={20} /> </span>
                        </div>
                    </div>
                </div>
            </section>
        </React.Fragment>
        );
    }
}
export default MarqueeComponent;
