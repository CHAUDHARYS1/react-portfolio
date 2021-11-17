import React from 'react';
import { Button, DatePicker } from 'antd';

const Header = () => {
    return(
    <div>
    <Button type="primary">PRESS ME</Button>
    <DatePicker placeholder="select date" />
    </div>
    );
}

export default Header;