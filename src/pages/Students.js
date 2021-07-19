import React, { useEffect, useState } from 'react';
import Button from '../components/Button';
import styled from 'styled-components';

import { getStudents } from '../services/api';

const DropDownOption = styled.div`
  display: none;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const DropDownBtn = styled.div`
  display: inline-block;
  margin: 0 auto;
  vertical-align: top;
  &:hover ${DropDownOption} {
    display: flex;
  }
`;

const MenuSection = styled.section`
  max-width: 1330px;
  margin: 0 auto;
  padding-top: 30px;
  background-color: #f1f1f1;
`;

const OptionsWrapper = styled.div`
  width: fit-content;
  height: 355px;
`;

const AddStudent = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr;
  padding: 55px;
  margin-top: -222px;
`;

const Input = styled.input`
  padding: 10px;
  margin: 10px 0;
  width: 100%;
  background-color: transparent;
  border: none;
  border-bottom: 1px solid gray;
  &:focus {
    outline: none;
  }
  ${(props) => {
    return props.half
      ? `
          width: 49%;
        `
      : null;
  }}
`;

const Form = styled.form`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  padding: 45px 15px;
  background-color: white;
`;

const H2 = styled.h2`
  width: 100%;
`;

const Textarea = styled.textarea`
  width: 100%;
  height: 150px;
  background-color: transparent;
  border: none;
  border-bottom: 1px solid gray;
  font-size: 20px;
  margin: 10px 0;
  &:focus {
    outline: none;
  }
`;

const Content = styled.div`
  background-color: steelblue;
  color: white;
  padding: 45px 23px;
`;

const InputDiv = styled.div`
  width: 49%;
  display: flex;
  flex-direction: column;
  margin: 20px 0;
`;

export const FormBtn = styled.button`
  border: none;
  border-radius: 6px;
  padding: 7px 35px;
  font-size: 16px;
  font-weight: 800;
  background-color: steelblue;
  color: white;
  box-shadow: 1px 1px 15px lightgray;
  transition: all 0.3s;
  cursor: pointer;
  &:hover {
    opacity: 0.7;
  }
`;

const P = styled.p`
  margin: 10px 0;
  line-height: 1.7rem;
`;



const ActionMenu = () => {
  const [students, setStudents] = useState([]);


  useEffect(() => {

    const fetchStudents = async () => {
      const res = await getStudents();
      setStudents(res);

    }

    fetchStudents();


  }, [])
  return (
    <>
      <MenuSection>
        <OptionsWrapper>
          <DropDownBtn>
            <Button color='red'>הוספה</Button>
            <DropDownOption>
              <Button color='lightblue'>תלמיד</Button>
              <Button color='green'>תלמיד</Button>
              <Button color='yellow'>תלמיד</Button>
            </DropDownOption>
          </DropDownBtn>
          <DropDownBtn>
            <Button color='lightblue'>צפייה</Button>
            <DropDownOption>
              <Button color='orange'>ציונים</Button>
              <Button color='gray'>ציונים</Button>
              <Button color='pink'>ציונים</Button>
            </DropDownOption>
          </DropDownBtn>
        </OptionsWrapper>
        <AddStudent>
          <Content>
            <h2>מחזור מ' פיתוח תוכנה</h2>
            <P>רשימת כל התלמידים הנמצאים במחזור הנל</P>
            <ul>
              {
                students.map(student =><li>{student.firstName } {student.lastName}</li>)
              }

            </ul>
          </Content>
          <Form>
            <H2>פרטי הסטודנט</H2>
            <InputDiv>
              <label>שם פרטי</label>
              <Input type='text' placeholder='שם פרטי' />
            </InputDiv>
            <InputDiv>
              <label>שם משפחה</label>
              <Input type='text' placeholder='שם משפחה' />
            </InputDiv>
            <label>אימייל</label>
            <Input type='text' placeholder='example@example.com' />
            <label>מידע על התלמיד</label>
            <Textarea placeholder='מידע על התלמיד'></Textarea>
            <FormBtn>הוסף </FormBtn>
          </Form>
        </AddStudent>
      </MenuSection>
    </>
  );
};

export default ActionMenu;
