import { render, fireEvent } from '@testing-library/react';
import App from '../App';
import Header from '../components/Header';

describe('testing the page header', () => {
  it('should render the page header', () => {
    const myPage = render(<Header />)
    expect(myPage.getByText('To do List')).toBeInTheDocument();
    expect(myPage.getByTestId('img-header')).toBeInTheDocument();
  });
});

describe('testing the page taskFilter', () => {
  it('should filter correctly', () => {
    const myPage = render(<App />);
    const schoolInput = myPage.getByTestId('school-filter');
    const workInput = myPage.getByTestId('work-filter');
    const homeInput = myPage.getByTestId('home-filter');
    const allInput = myPage.getByTestId('all-filter');

    fireEvent.click(schoolInput);
    expect(myPage.getByTestId('school-filter')).toBeChecked();
    fireEvent.click(workInput);
    expect(myPage.getByTestId('work-filter')).toBeChecked();
    fireEvent.click(homeInput);
    expect(myPage.getByTestId('home-filter')).toBeChecked();
    fireEvent.click(allInput);
    expect(myPage.getByTestId('all-filter')).toBeChecked();    
  });
  it('should render the correct tasks after select the filter', async () => {
    const myPage = render(<App />);
    const textInput = myPage.getByTestId('text-input');
    const saveBtn = myPage.getByTestId('add-task-button');
    const schoolType = myPage.getByTestId('school-type');
    const homeType = myPage.getByTestId('home-type')
    const schoolFilter = myPage.getByTestId('school-filter');
    const allFilter = myPage.getByTestId('all-filter');
    const homeFilter = myPage.getByTestId('home-filter');

    const textValue = 'first task';
    fireEvent.change(textInput, { target: { value: textValue } });
    fireEvent.click(schoolType);
    fireEvent.click(saveBtn);
    const taskList = myPage.getByTestId('task-1');

    expect(taskList).toBeInTheDocument();
    expect(taskList).toHaveTextContent(textValue);

    const textValue2 = 'second task';
    fireEvent.change(textInput, { target: { value: textValue2 } });
    fireEvent.click(homeType);
    fireEvent.click(saveBtn);
    const taskList2 = myPage.getByTestId('task-2');

    expect(taskList2).toBeInTheDocument();
    expect(taskList2).toHaveTextContent(textValue2);

    fireEvent.click(schoolFilter);
    const filteredTaskList = myPage.getByTestId('ft-task-1');
    expect(filteredTaskList).toBeInTheDocument();
    expect(filteredTaskList).toHaveTextContent(textValue);
    expect(taskList2).not.toBeInTheDocument();

    fireEvent.click(homeFilter);
    expect(homeFilter).toBeChecked();
    expect(filteredTaskList).toBeInTheDocument();
    expect(filteredTaskList).toHaveTextContent(textValue2);
    expect(taskList2).not.toBeInTheDocument();

    fireEvent.click(allFilter);
    expect(allFilter).toBeChecked();
    expect(filteredTaskList).toBeInTheDocument();
    expect(filteredTaskList).toHaveTextContent(textValue);
    expect(taskList2).toHaveTextContent(textValue2);
  });
});

describe('testing the other type', () => {
  it('test the other type', ()=> {
    const myPage = render(<App />);
    
    const otherInput = myPage.getByTestId('other-type');
    fireEvent.click(otherInput);
    expect(myPage.getByTestId('other-type')).toBeChecked();

    const otherTextInput = myPage.getByTestId("text-other-input");
    const otherBtnInput = myPage.getByTestId("btn-other-input");

    expect(otherTextInput).toBeInTheDocument();
    expect(otherBtnInput).toBeInTheDocument();

    const otherTextValue = 'other type';
    fireEvent.change(otherTextInput, { target: { value: otherTextValue } });
    fireEvent.click(otherBtnInput);
    const otherTaskListType = myPage.getByTestId(`${otherTextValue}-filter`);
    expect(otherTaskListType).toBeInTheDocument();
  })
})

describe('testing taskList', () => {
  it('taskList buttons should work correctly', () => {
    const myPage = render(<App />);
    
    const textInput = myPage.getByTestId('text-input');
    const saveBtn = myPage.getByTestId('add-task-button');
    const schoolType = myPage.getByTestId('school-type');    

    const textValue = 'first task';
    fireEvent.change(textInput, { target: { value: textValue } });
    fireEvent.click(schoolType);
    fireEvent.click(saveBtn);

    
    const taskList = myPage.getByTestId('task-1');
    expect(taskList).toBeInTheDocument();

    const editBtn = myPage.getByTestId('edit-btn-task');
    expect(taskList).toHaveTextContent(textValue);
    fireEvent.click(editBtn);

    const textEditInput = 'edit-text-task';
    expect(myPage.getByTestId(textEditInput)).toBeInTheDocument();

    const newTextValue = 'new text';
    fireEvent.change(myPage.getByTestId(textEditInput), { target: { value: newTextValue } });
    const saveEditBtn = myPage.getByTestId('save-btn-task');
    fireEvent.click(saveEditBtn);
    expect(taskList).toHaveTextContent(newTextValue);

    const doneTask = myPage.getByTestId('done-btn');
    fireEvent.click(doneTask);
    const undoTask = myPage.getByTestId('undo-btn');
    fireEvent.click(undoTask);

    const deleteBtn = 'delete-btn-task';
    expect(myPage.getByTestId(deleteBtn)).toBeInTheDocument();
    fireEvent.click(myPage.getByTestId(deleteBtn));
    expect(taskList).not.toBeInTheDocument();
  });
  it('taskList filtered buttons should work correctly', () => {
    const myPage = render(<App />);
    
    const textInput = myPage.getByTestId('text-input');
    const saveBtn = myPage.getByTestId('add-task-button');
    const schoolType = myPage.getByTestId('school-type');    

    const textValue = 'first task';
    fireEvent.change(textInput, { target: { value: textValue } });
    fireEvent.click(schoolType);
    fireEvent.click(saveBtn);
     
    const schoolFilter = myPage.getByTestId('school-filter');
    fireEvent.click(schoolFilter);
    
    const taskList = myPage.getByTestId('ft-task-1');
    expect(taskList).toBeInTheDocument();
    expect(taskList).toHaveTextContent(textValue);

    const editBtn = myPage.getByTestId('ft-edit-btn-task');
    fireEvent.click(editBtn);


    const textEditInput = 'ft-edit-text-task';
    expect(myPage.getByTestId(textEditInput)).toBeInTheDocument();

    const newTextValue = 'new text';
    fireEvent.change(myPage.getByTestId(textEditInput), { target: { value: newTextValue } });  

    const saveEditBtn = myPage.getByTestId('ft-save-btn-task');    
    fireEvent.click(saveEditBtn);

    const newTaskList = myPage.getByTestId('ft-task-1');
    expect(newTaskList).toHaveTextContent(newTextValue);

    const doneTask = myPage.getByTestId('ft-done-btn');
    fireEvent.click(doneTask);
    const undoTask = myPage.getByTestId('ft-undo-btn');
    fireEvent.click(undoTask);

    const deleteBtn = 'ft-delete-btn-task';
    expect(myPage.getByTestId(deleteBtn)).toBeInTheDocument();
    fireEvent.click(myPage.getByTestId(deleteBtn));
    expect(taskList).not.toBeInTheDocument();
  });
});
