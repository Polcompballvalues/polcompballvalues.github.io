#Imports message.txt and parses it to ouptut a valid coffeescript file
import re
input = open ("message.txt", "r", encoding="utf-8")
output = open ("questions.coffee", "w", encoding="utf-8")
output.write("fullquestions = [\n")
for line in input:
    trunc1 = line.split("(")
    if len(trunc1) > 1:
        value = trunc1[1]
        question = trunc1[0]
        value = value[:5]
        #checks if value is positive or negative and truncates the +/- sign
        if value[:1] == "-":
            boolval = "-"
            value = value[1:]
        elif value[:1] == "+":
            boolval = "+"
            value = value[1:]
        else:
            boolval = "+"
            value = value[:4]
        #sets class of values
        class values:
            spos = alle = expr = pers = horn = fame = shwr = sani = rela = fedp = actn = purp = perc = cmdy = 0
            exec(value + " = " + boolval + "10")
        #checks if question will be in short test (has " ^ " at the end)
        if re.search(r"\s\^\s", question):
            short = True
            question = question[:-3]
        else:
            short = False
            question = question[:-1]
        #writes the array objects
        output.write(f"  \"question\": \"{question}\"\n")
        if short == True:
            output.write(f"  \"short\": true\n")
        else:
            output.write(f"  \"short\": false\n")
        output.write(f"  \"effect\":\n")
        output.write(f"    \"spos\": {values.spos}\n")
        output.write(f"    \"alle\": {values.alle}\n")
        output.write(f"    \"expr\": {values.expr}\n")
        output.write(f"    \"pers\": {values.pers}\n")
        output.write(f"    \"horn\": {values.horn}\n")
        output.write(f"    \"fame\": {values.fame}\n")
        output.write(f"    \"shwr\": {values.shwr}\n")
        output.write(f"    \"sani\": {values.sani}\n")
        output.write(f"    \"rela\": {values.rela}\n")
        output.write(f"    \"fedp\": {values.fedp}\n")
        output.write(f"    \"actn\": {values.actn}\n")
        output.write(f"    \"purp\": {values.purp}\n")
        output.write(f"    \"perc\": {values.perc}\n")
        output.write(f"    \"cmdy\": {values.cmdy}\n")
        output.write(f",\n")
output.write("]")
output.close()


      