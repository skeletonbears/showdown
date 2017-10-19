<search>
  <yield />
  <form onsubmit={search} >
    <input ref="search" type="text" placeholder="{ opts.placeholder }">
  </form>

  <script>
    // When tag mounts, focus the search field
    this.on('mount', () => {
      this.refs.search.focus()
    })

    // Search submit handler
    this.search = (e) => {
      e.preventDefault()

      // Get search term
      let term = this.refs.search.value

      // Search the API
      this.giphySearch(term)
    }

  </script>

  <style>
    :scope{
      display: block;
      margin: 1rem;
      margin-bottom: 2em;
    }

    input{
      display: block;
      width: 100%;
      font-size: 2rem;
      padding: 1rem;
      box-sizing: border-box;
    }

    input::placeholder {
      font-weight: 100;
      font-style: italic;
    }
  </style>

</search>
