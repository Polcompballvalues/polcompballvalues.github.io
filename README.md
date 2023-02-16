# What is Polcompballvalues?
[![Discord](https://img.shields.io/badge/Polcompball-Discord-%235865F2?style=flat&logo=discord)](https://discord.gg/RWVrPNZPgA)
[![Reddit](https://img.shields.io/badge/r%2FPolcompball-Reddit-%23FF4500?style=flat&logo=reddit)](https://www.reddit.com/r/Polcompball/)
[![Miraheze](https://img.shields.io/badge/Polcompball%20Wiki-Miraheze-%23FFC200?style=flat&logo=data:image/svg%2bxml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMzUiIGhlaWdodD0iMTM1Ij48cGF0aCBkPSJtNTYuNzIyIDQ4LjU0MiAyMS4xOS4wNjJMODguODggNjcuNTUgNzguMDM2IDg2LjI0N0g1Ni42NTlsLTEwLjkwNi0xOC43NnoiIHN0eWxlPSJmaWxsOiM4ZTc2NTA7ZmlsbC1vcGFjaXR5OjE7ZmlsbC1ydWxlOmV2ZW5vZGQ7c3Ryb2tlOm5vbmU7c3Ryb2tlLXdpZHRoOjFweDtzdHJva2UtbGluZWNhcDpidXR0O3N0cm9rZS1saW5lam9pbjptaXRlcjtzdHJva2Utb3BhY2l0eToxIi8+PHBhdGggZD0ibTU2LjcyMi4wMTYgMjEuMTkuMDYyTDg4Ljg4IDE5LjAyNCA3OC4wMzYgMzcuNzIxSDU2LjY2TDQ1Ljc1MyAxOC45NnptMCA5Ny4yNzkgMjEuMTkuMDYyIDEwLjk2OCAxOC45NDZMNzguMDM2IDEzNUg1Ni42NmwtMTAuOTA3LTE4Ljc1OVptNDEuOTQ0LTI0LjYwMSAyMS4xOS4wNjMgMTAuOTY4IDE4Ljk0Ni0xMC44NDQgMTguNjk2SDk4LjYwNEw4Ny42OTcgOTEuNjR6bTAtNDguMzY0IDIxLjE5LjA2MSAxMC45NjkgMTguOTQ2LTEwLjg0NCAxOC42OTdIOTguNjA0TDg3LjY5OCA0My4yNzV6bS04My43MTkgMCAyMS4xNDYuMDYxIDEwLjk0NiAxOC45NDYtMTAuODIyIDE4LjY5N0gxNC44ODRMNCA0My4yNzV6bS4wMjIgNDguMzY0IDIxLjE5LjA2MyAxMC45NjggMTguOTQ2LTEwLjg0NCAxOC42OTZIMTQuOTA2TDQgOTEuNjRaIiBzdHlsZT0iZmlsbDojZmZjMjAwO2ZpbGwtb3BhY2l0eToxO2ZpbGwtcnVsZTpldmVub2RkO3N0cm9rZTpub25lO3N0cm9rZS13aWR0aDoxcHg7c3Ryb2tlLWxpbmVjYXA6YnV0dDtzdHJva2UtbGluZWpvaW46bWl0ZXI7c3Ryb2tlLW9wYWNpdHk6MSIvPjwvc3ZnPg==)](https://polcompball.miraheze.org/wiki/Polcompball_Wiki)

PolcompballValues is a quiz aimed at members of the Polcompball community, in particular the discord server, that attempts to assign percentages for 28 different values based on common differentating factors of the community's population.

## Where is the old version of Polcompballvalues?
The old version is available on [this link](https://polcompballvalues.github.io/legacy/) with the code hosted on [this repository](https://github.com/Polcompballvalues/legacy).

## Where can I see which users I can get matched with if I take the test?
You can see the current available user scores in the [user gallery](https://polcompballvalues.github.io/gallery.html).

## How do I get added to the user gallery?
You can be added by taking the test and selecting the "Submit Your Scores" option at the bottom of the page, this will take you to a page with a text box and a "Send" button, simply enter the name you want to be added as to the test and click the send button.

Alternatively you can send an HTTP POST request to the address [https://pcbval.theghostofinky.repl.co/api/](https://pcbval.theghostofinky.repl.co/api/) with a JSON payload similar to the shown below:
```json
{
    "name" : "Your name",
    "vals" : [
        50,
        50,
        50,
        50,
        50,
        50,
        50,
        50,
        50,
        50,
        50,
        50,
        50,
        50
    ]
}
```
A successful submition will return a json containing `{"success":true}`, an invalid score will return an HTTP error code and an error submitting a valid score will return `{"success":false}`


## Who worked on this test?
You can see the full list of involved members in the [credits](https://polcompballvalues.github.io/credits.html) page.
