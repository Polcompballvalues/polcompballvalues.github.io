$parentpath = (get-item (Get-Location)).parent.FullName
$coffeefiles = Get-ChildItem $parentpath\scripts\* -Include *.coffee
$tsfiles = Get-ChildItem $parentpath\scripts\* -Include *.ts
$sassfiles = Get-ChildItem $parentpath\stylesheets\* -Include *.sass
foreach ($file in $coffeefiles){
    coffee -c -b $file
}
foreach ($file in $tsfiles){
    tsc $file -removeComments
}
foreach ($file in $sassfiles){
    $basefile = (Get-Item $file).basename
    $cssfile = $parentpath + "\stylesheets\" + $basefile + ".css"
    sass $file $cssfile --no-source-map
}
Write-Output "All files compiled"