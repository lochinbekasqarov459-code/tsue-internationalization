# TSUE Internationalization Portal

An independent, multilingual concept portal for internationalization information at Tashkent State University of Economics (TSUE).

> This is a demonstration project, not the official TSUE website and not endorsed by the university.

## Stack
- Next.js 15 App Router
- React 19 and TypeScript
- Tailwind CSS
- Uzbek, English and Russian: `/uz`, `/en`, `/ru`
- Render web service with automatic deploys from `main`

## Run locally
```bash
npm install
npm run dev
```

## Production build
```bash
npm run build
npm start
```

## Live demo
- Portal: https://tsue-global-portal.onrender.com
- Source repository: https://github.com/lochinbekasqarov459-code/tsue-internationalization

## Content integrity
International section pages include dates, descriptions and links to TSUE or official event sources. Past events are marked as archive items. Admission requirements, deadlines, fees, staff details, partnership status and programme rules can change; always follow the current official announcement before taking action. This concept portal does not publish statements on behalf of TSUE.

## Deployment
The repository includes `render.yaml` for a Frankfurt-region Render Node.js web service. Changes merged into `main` trigger an automatic deployment.
