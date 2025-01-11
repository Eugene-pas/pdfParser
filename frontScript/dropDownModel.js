let AI = 'OLLAMA';
const AIType = { OLLAMA: 'OLLAMA', GPT: 'GPT', GEMINI: 'GEMINI' };
let model = '';

function dropDownModel() {

  const ModelType = {
    OLLAMA: {
      llama3_2: 'llama3.2:latest',
      llama3_2_vision: 'llama3.2-vision',
      minicpm_v: 'minicpm-v',
      phi3: 'phi3:14b'

    }, GPT: {
      gpt_3_5_turbo: 'gpt-3.5-turbo',
      gpt_4o_mini: 'gpt-4o-mini'
    },
    GEMINI: {
      gemini_1_5_flash: 'gemini-1.5-flash',
      gemini_2_0_flash_exp: 'gemini-2.0-flash-exp'
    }
  };

  const arreyAI = {
    'Ollama': AIType.OLLAMA,
    'GPT': AIType.GPT,
    'Gemini': AIType.GEMINI
  };

  const dropdownAI = document.getElementById('dropdownAI');
  AI = AIType.OLLAMA;
  let arreyModel = ModelType[AI];
  model = AI === 'OLLAMA' ? ModelType.OLLAMA.llama3_2 : ModelType.GPT.gpt_3_5_turbo;

  // AI dropdown
  for (const key in arreyAI) {
    if (Object.hasOwnProperty.call(arreyAI, key)) {
      const element = arreyAI[key];

      dropdownAI.appendChild(new Option(key, element));
    }
  }

  dropdownAI.addEventListener('change', (e) => {
    AI = e.target.value;
    arreyModel = ModelType[AI];
    setModelSelect();
  });

  // Model dropdown
  const dropdownModel = document.getElementById('dropdownModel');

  function setModelSelect() {
    dropdownModel.innerHTML = '';

    switch (AI) {
      case AIType.OLLAMA:
        model = ModelType.OLLAMA.llama3_2;

        break;
      case AIType.GPT:
        model = ModelType.GPT.gpt_3_5_turbo;
        break;
      case AIType.GEMINI:
        model = ModelType.GEMINI.gemini_1_5_flash;
        break;

      default:
        break;
    }

    for (const key in arreyModel) {
      if (Object.hasOwnProperty.call(arreyModel, key)) {
        const element = arreyModel[key];

        dropdownModel.appendChild(new Option(key, element));
      }
    }
  }

  setModelSelect();

  dropdownModel.addEventListener('change', (e) => {
    model = e.target.value;
  });

}

