import * as React from 'react';
import '../../assets/styles/Loader.scss';
import { Row, Col } from 'react-bootstrap'

interface Props {
    isLoading: Boolean;
}

const Loader: React.FunctionComponent<Props> = (props) => {
    return (
        <>
            {props.isLoading && 
                <Row>
                    <Col sm={{ span: 6, offset: 3 }} md={{ span: 4, offset: 4 }}>
                        <div className="loader">
                            <h2>Loading ...</h2>
                            <div className="lds-css ng-scope">
                                <div style={{width:"100%", height:"100%"}} className="lds-pacman">
                                    <div>
                                        <div></div>
                                        <div></div>
                                        <div></div>
                                    </div>
                                    <div>
                                        <div></div>
                                        <div></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Col>
                </Row>
            }

            {!props.isLoading && props.children}
        </>
    );
}

export default Loader;