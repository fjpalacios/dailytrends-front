# Dailytrends Frontend

This is the frontend of the DailyTrends application, a digital newspaper that allows you to view the cover articles of the two most important newspapers in Spain.

## FAQ
* Why are there two different sections of news?
  * There are some news that come with a picture and others without it, I found horrible to distribute all of them in the same space.
* What do the 'El Mundo' and 'El País' sections have?
  * The main page has only the latest 5 news. Every 30 minutes the backend stores new news, so I think it's a shame to miss that. In these sections you can access the full content of each newspaper.

## Requirements
* [Docker](https://www.docker.com/get-started)
* [Docker Compose](https://docs.docker.com/compose/)

## Installation
You can change the port of this development server just by editing the `.env.example` file.

```console
$ git clone git@github.com:fjpalacios/dailytrends-front.git
$ cd dailytrends-front
$ mv .env.example .env
$ make build
$ make run
```

## Testing
If you want to run the test suite you can do it just by typing `make test`.

## License
[GNU GPL v3](LICENSE.txt)

    This program is free software: you can redistribute it and/or modify it under
    the terms of the GNU General Public License as published by the Free Software
    Foundation, either version 3 of the License, or (at your option) any later version.

    This program is distributed in the hope that it will be useful, but WITHOUT
    ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS
    FOR A PARTICULAR PURPOSE. See the GNU General Public License for more details.

    You should have received a copy of the GNU General Public License along with
    this program. If not, see <http://www.gnu.org/licenses/>.
