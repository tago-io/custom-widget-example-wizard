import { h } from 'preact';

export default function Step2(props) {

  const { variables, onChangeVariable, values } = props;

  return (
    <div className="step-container">
      <h3>Step 3</h3>
      <br/>
      <div class="form-group">
        <label for="var5">var5</label>
        <input
          id="var5"
          value={(values && values.var5) ? values.var5 : ""}
          onInput={(e) => onChangeVariable('var5', e.target.value)} 
        />
      </div>
      <div class="form-group">
        <label for="var6">var6</label>
        <input
          id="var6"
          value={(values && values.var6) ? values.var6 : ""}
          onInput={(e) => onChangeVariable('var6', e.target.value)} 
        />
      </div>
    </div>
  );
}
