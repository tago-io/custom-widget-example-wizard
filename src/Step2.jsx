import { h } from 'preact';

export default function Step2(props) {

  const { variables, onChangeVariable, values } = props;

  return (
    <div className="step-container">
      <h3>Step 2</h3>
      <br/>
      <div class="form-group">
        <label for="var3">var3</label>
        <input
          id="var3"
          value={(values && values.var3) ? values.var3 : ""}
          onInput={(e) => onChangeVariable('var3', e.target.value)} 
        />
      </div>
      <div class="form-group">
        <label for="var4">var4</label>
        <input
          id="var4"
          value={(values && values.var4) ? values.var4 : ""}
          onInput={(e) => onChangeVariable('var4', e.target.value)} 
        />
      </div>
    </div>
  );
}
