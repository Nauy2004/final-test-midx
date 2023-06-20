let n = Number(prompt('nhập vào chiều cao:'));
function numberOneTriangle(a) {
    let q = 0;
    while (a > 0)
        {
            for (let k = 0; k <= q; k ++)
                document.writeln('*');
            a--;
            q += 1;
            document.writeln("<br/>");
        }
}
numberOneTriangle(n);