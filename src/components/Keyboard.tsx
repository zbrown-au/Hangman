import * as React from 'react';
import * as _ from 'lodash';
import Letter from './Letter';
import store from '../data/Store';
import { observer } from 'mobx-react';

const RowLength = 9;

const Keyboard: React.FunctionComponent = () => {
    
    var letterGroups = _.chunk(store.letters, RowLength);
     
    return (
        <div>
            {letterGroups.map((group, index) =>
                <div className="letter-group" key={index} >
                    {group.map(letter =>
                        <Letter key={letter.code} letter={letter} />
                    )}
                </div>
            )}
        </div>
    );
}

export default observer(Keyboard);
