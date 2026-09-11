# Progress Log

## Week 1

Set up Node, Git, Claude Code and VS Code. Hit a PATH issue where the
installed CLI wasn't visible until I opened a new terminal. Designed the
core loop and identified the two structural problems with v1: hour-buckets
instead of intervals, and blocking modals that punished you for logging late.

## Week 2

Built the first server. Node + Express, one route returning JSON, running
on localhost:3000. Learned the difference between req.params (path, declared
with :id, required) and req.query (after the ?, undeclared, optional), and
how to set status codes so errors come back as JSON instead of Express's
default HTML page.

Wrote a frontend that fetches from the server and displays the result.
Hit CORS — the browser blocked my own page from reading my own server's
response. The console said "ERR_FAILED 200 (OK)", which was the clue: the
request succeeded and the browser threw the response away. Fixed with the
cors middleware, which adds the Access-Control-Allow-Origin header. Noted
that CORS is not authentication — it only applies to browsers, and curl or
Postman ignore it entirely. Opened issues to restrict the origin before
deploying.

Cleaned up: deleted the practice routes, added an npm start script, moved
the frontend into public/.
