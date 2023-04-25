#! /usr/bin/env wish
package require Tk
package require json
package require sqlite3

wm title . "PolCompBallvalues database updater"
grid [ttk::frame .c -padding "10 10 10 10"] -column 0 -row 0 -sticky nwes
grid columnconfigure . 0 -weight 1; grid rowconfigure . 0 -weight 1

grid [ttk::label .c.title -textvariable title] -column 1 -row 1
grid [tk::text .c.jsoninput -width 30 -height 19 -padx 5 -pady 5] -column 1 -row 2
grid [ttk::button .c.parse -text "Add to DB" -command parsescores] -column 1 -row 3
grid [ttk::button .c.update -text "Update in DB" -command updatescores] -column 1 -row 4
grid [ttk::button .c.delete -text "Remove from DB" -command deletescores] -column 1 -row 5
grid [ttk::button .c.clear -text "Clear" -command clearinput] -column 1 -row 6
grid [ttk::button .c.create -text "Create DB" -command createdb] -column 1 -row 7

set ::title "Insert score json to start"

proc parsescores {} {
    set rawtext [.c.jsoninput get 1.0 end]
    set data [::json::json2dict $rawtext]
    set name [dict get $data name]
    set values [dict get $data values]
    set i 0
    foreach n $values {
        set valuearray($i) $n
        incr i
    }

    sqlite3 opendb "./database/scores.db"
    if {[opendb exists {SELECT * FROM scores WHERE name=$name }]} {
        set ::title "$name is already in the database"
    } else {
        opendb eval {INSERT INTO scores VALUES(
            $name,
            $valuearray(0),
            $valuearray(1),
            $valuearray(2),
            $valuearray(3),
            $valuearray(4),
            $valuearray(5),
            $valuearray(6),
            $valuearray(7),
            $valuearray(8),
            $valuearray(9),
            $valuearray(10),
            $valuearray(11),
            $valuearray(12),
            $valuearray(13)
            )}
            set ::title "Added $name to database"
    }
    opendb close
}

proc updatescores {} {
    set rawtext [.c.jsoninput get 1.0 end]
    set data [::json::json2dict $rawtext]
    set name [dict get $data name]
    set values [dict get $data values]
    set i 0
    foreach n $values {
        set valuearray($i) $n
        incr i
    }
    sqlite3 opendb "./database/scores.db"
    if {[opendb exists {SELECT * FROM scores WHERE name=$name }]} {
        opendb eval {UPDATE scores SET spos=(
            $valuearray(0)), alle=(
            $valuearray(1)), expr=(
            $valuearray(2)), pers=(
            $valuearray(3)), horn=(
            $valuearray(4)), fame=(
            $valuearray(5)), shwr=(
            $valuearray(6)), sani=(
            $valuearray(7)), real=(
            $valuearray(8)), fedp=(
            $valuearray(9)), actn=(
            $valuearray(10)), purp=(
            $valuearray(11)), perc=(
            $valuearray(12)), cmdy=(
            $valuearray(13)) WHERE name=$name
        }
        set ::title "Updated $name in database"
    } else {
        set ::title "$name is not in the database"
    }
}

proc deletescores {} {
    set rawtext [.c.jsoninput get 1.0 end]
    set splittext [split $rawtext "\n"]
    set name [lindex $splittext 0]
    sqlite3 opendb "./database/scores.db"
    if {[opendb exists {SELECT * FROM scores WHERE name=$name }]} {
        opendb eval {DELETE FROM scores WHERE name=$name}
        set ::title "Removed $name from database"
    } else {
        set ::title "$name is not in the database"
    }
}


proc clearinput {} {
    .c.jsoninput delete 0.0 end
    set ::title "Insert score json to start"
}

proc createdb {} {
    sqlite3 opendb "./database/scores.db"
    if {[opendb exists {SELECT name FROM sqlite_master WHERE type='table' AND name='scores'}]} {
        set ::title "Database table already exists"
    } else {
        opendb eval {CREATE TABLE scores(
            name text,
            spos real,
            alle real,
            expr real,
            pers real,
            horn real,
            fame real,
            shwr real,
            sani real,
            real real,
            fedp real,
            actn real,
            purp real,
            perc real,
            cmdy real
            ) }
        }
        opendb close
    }