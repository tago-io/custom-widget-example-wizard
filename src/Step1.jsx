import { h } from 'preact';

export default function Step1(props) {

  const { variables, onChangeVariable, values } = props;
  
  return (
    <div className="step-container">
      <h3>Step 1</h3>
      <br/>
      <div class="form-group">
        <label for="var1">var1</label>
        <input
          id="var1"
          value={(values && values.var1) ? values.var1 : ""}
          onInput={(e) => onChangeVariable('var1', e.target.value)} 
        />
      </div>
      <div class="form-group">
        <label for="var2">var2</label>
        <select class="select" id="var2" value={(values && values.var2val) ? values.var2val : ""} onChange={(e) => onChangeVariable('var2val', e.target.value)}>
          {variables && variables.var2 && variables.var2.map(el => (
            <option value={el}>{el}</option>
          ))}
        </select>
      </div>
    </div>
  );
}
