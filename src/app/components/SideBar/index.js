import { Input, Button } from 'antd';
import styled from 'styled-components';
import { useState } from 'react';

const Container = styled.div`
    display: flex;
    flex-direction: column;
    padding: 20px 10px;
`
const Form = styled.div`
    .ant-input {
        margin-bottom: 10px;
    }
`

const SideBar = ({ record, height, onChange }) => {
    const [formRecord, setFormRecord] = useState(record);
    const [formHeight, setFormHeight] = useState(height);

    const handleChange = () => {
        onChange(formRecord, formHeight);
    }
    
    return (
        <Container>
            <Form>
                <Input placeholder={'Record number'} value={formRecord} onChange={(e) => { setFormRecord(e.target.value)}}/>
                <Input placeholder={'Table height'} value={formHeight} onChange={(e) => { setFormHeight(e.target.value)}}/>
            </Form>
            <Button type="primary" size="small" block onClick={handleChange}>Change</Button>
        </Container>
    )
}

export default SideBar;