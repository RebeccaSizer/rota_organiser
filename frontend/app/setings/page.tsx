export default function SettingsPage() {
  return (
    <>
      <header className="page-header">
        <div>
          <p className="eyebrow">CONFIGURATION</p>
          <h1>Settings</h1>
          <p className="muted">
            Current presentation rota configuration.
          </p>
        </div>
      </header>

      <section className="section">
        <article className="settings-card">
          <h2>Rota configuration</h2>

          <div className="setting-row">
            <div>
              <strong>Presentation frequency</strong>
              <p>How often a presentation is scheduled.</p>
            </div>
            <span>Weekly</span>
          </div>

          <div className="setting-row">
            <div>
              <strong>Rotation order</strong>
              <p>Team members take turns in sequence.</p>
            </div>
            <span>Sequential</span>
          </div>

          <div className="setting-row">
            <div>
              <strong>Email reminders</strong>
              <p>Reminder delivery will be configured later.</p>
            </div>
            <span className="pill">Not configured</span>
          </div>
        </article>
      </section>
    </>
  );
}