ALTER FUNCTION GetProductWithId (@id INT) RETURNS TABLE AS RETURN (
    SELECT
        *
    FROM
        dbo.product
    WHERE
        id = @id
);
GO

CREATE PROCEDURE GetProducts
    @page INT,
    @size INT
AS
BEGIN
    -- Tập kết quả 1: dữ liệu phân trang
    WITH Product AS (
        SELECT *,
               ROW_NUMBER() OVER (ORDER BY id DESC) AS rn
        FROM dbo.product
		WHERE status = 'normal' AND amount <> '0'
    )
    SELECT *
    FROM Product
    WHERE rn BETWEEN ((@page - 1) * @size + 1) AND (@page * @size);

    -- Tập kết quả 2: tổng số dòng
    SELECT COUNT(*) AS totalCount FROM dbo.product;
END
GO