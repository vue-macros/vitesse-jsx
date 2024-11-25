export default () => (
  <nav mt-6 inline-flex gap-2 text-xl>
    <button icon-btn onClick={() => toggleDark()}>
      <div i-carbon-sun dark:i-carbon-moon />
    </button>

    <a
      i-carbon-logo-github
      icon-btn
      rel="noreferrer"
      href="https://github.com/vue-macros/vitesse-jsx"
      target="_blank"
      title="GitHub"
    />
  </nav>
)
