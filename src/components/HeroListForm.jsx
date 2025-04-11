import { Form } from 'react-router'

export function HeroListForm({ heroQuery, setHeroQuery, attrFilter }) {
  return (
    <div className='hero-list-form'>
      <Form
        className='inner'
        onSubmit={e => e.preventDefault()}
      >
        <label
          htmlFor='query'
          name='query'
        >
          <input
            id='query'
            type='text'
            placeholder='Search Hero Name'
            value={heroQuery}
            onChange={e => setHeroQuery(e.target.value)}
          ></input>
        </label>
        <div className='primary-attr-container'>
          <button
            name='str'
            onClick={e => attrFilter(e)}
            className='attr-button str'
          >
            STR
          </button>
          <button
            name='agi'
            onClick={e => attrFilter(e)}
            className='attr-button agi'
          >
            AGI
          </button>
          <button
            name='int'
            onClick={e => attrFilter(e)}
            className='attr-button int'
          >
            INT
          </button>
          <button
            name='all'
            onClick={e => attrFilter(e)}
            className='attr-button uni'
          >
            UNI
          </button>
        </div>
        <div>Light-darkmode here</div>
      </Form>
    </div>
  )
}
