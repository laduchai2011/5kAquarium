CREATE PROCEDURE Signup
	  @userName NVARCHAR(100),
	  @password NVARCHAR(100),
	  @phone NVARCHAR(15),
	  @firstName NVARCHAR(20),
	  @lastName NVARCHAR(20)
AS
BEGIN
	SET NOCOUNT ON;

	INSERT INTO account (userName, password, phone, firstName, lastName, avatar, status, createTime)
	OUTPUT INSERTED.*
	VALUES (@userName, @password, @phone, @firstName, @lastName, NULL, 'normal', SYSDATETIMEOFFSET());
END

DELETE FROM account
GO

ALTER PROCEDURE AddContact
	  @name NVARCHAR(100),
	  @phone NVARCHAR(15),
	  @address NVARCHAR(100),
	  @userId INT
AS
BEGIN
	SET NOCOUNT ON;

	INSERT INTO contact (name, phone, address, status, userId)
	OUTPUT INSERTED.*
	VALUES (@name, @phone, @address, 'normal', @userId);
END